import { useState } from 'react';
import SearchBar from './components/SearchBar';
import InfoCard from './components/InfoCard';
import MapView from './components/MapView';
import LoadingSpinner from './components/LoadingSpinner';
import { searchIP } from './services/ipService';
import { IPData } from './types';

function App() {
  const [ipData, setIpData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (ipAddress: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchIP(ipAddress);
      setIpData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch IP data');
      setIpData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgtMnYyaDJ2LTJ6bS0yLTJoMnYtMmgtMnYyem0yLTJ2LTJoLTJ2Mmgyem0tMi00aDJ2LTJoLTJ2MnptMiAydi0yaDJ2LTJoLTJ2Mmgyem0wIDJ2LTJoMnYyaC0yem0wIDJ2LTJoMnYyaC0yem0wIDJ2LTJoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-6 shadow-lg shadow-blue-500/50 animate-pulse-slow">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            IP Address Tracker
          </h1>
          <p className="text-cyan-300 text-lg">Track and locate any IP address in real-time</p>
        </header>

        <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {loading && (
          <div className="flex justify-center mb-8 animate-fade-in">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto mb-8 animate-shake">
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-red-300 text-center">{error}</p>
            </div>
          </div>
        )}

        {ipData && !loading && (
          <>
            <div className="max-w-6xl mx-auto mb-8 animate-fade-in-up">
              <InfoCard data={ipData} />
            </div>

            <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <MapView latitude={ipData.latitude} longitude={ipData.longitude} city={ipData.city} />
            </div>
          </>
        )}

        {!ipData && !loading && !error && (
          <div className="text-center text-cyan-300/60 mt-20 animate-fade-in">
            <svg className="w-24 h-24 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-xl">Enter an IP address to start tracking</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
