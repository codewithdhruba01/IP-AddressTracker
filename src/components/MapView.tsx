import { MapPin } from 'lucide-react';

interface MapViewProps {
  latitude: number;
  longitude: number;
  city: string;
}

export default function MapView({ latitude, longitude, city }: MapViewProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.1},${latitude - 0.1},${longitude + 0.1},${latitude + 0.1}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-30 group-hover:opacity-50 blur transition duration-300"></div>

      <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl">
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-4 border-b border-cyan-500/20 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow-lg">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">Location Map</h3>
            <p className="text-cyan-300/70 text-sm">{city}</p>
          </div>
          <div className="ml-auto flex items-center gap-2 text-cyan-300/70 text-sm">
            <span className="hidden sm:inline">Coordinates:</span>
            <span className="font-mono bg-slate-900/50 px-3 py-1 rounded-lg">{latitude.toFixed(4)}, {longitude.toFixed(4)}</span>
          </div>
        </div>

        <div className="relative w-full h-[500px] bg-slate-900/50">
          <iframe
            title="Location Map"
            src={mapUrl}
            className="w-full h-full border-0"
            loading="lazy"
          />

          <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/30 shadow-lg">
            <p className="text-cyan-300 text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping absolute"></span>
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span className="ml-2">Live Location</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 px-6 py-4 border-t border-cyan-500/20">
          <div className="flex flex-wrap gap-4 text-sm text-cyan-300/70">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span>Exact location marker</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Interactive map view</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span>Real-time tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
