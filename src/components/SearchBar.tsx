import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (ipAddress: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!loading) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
      <div className="relative flex items-center bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-cyan-500/20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter IP address (or leave empty for your IP)"
          className="flex-1 bg-transparent text-white px-6 py-5 outline-none placeholder-cyan-300/50 text-lg"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          <span>Track</span>
        </button>
      </div>
    </form>
  );
}
