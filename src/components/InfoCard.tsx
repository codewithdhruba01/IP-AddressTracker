import { MapPin, Globe, Clock, Wifi, Building, Server } from 'lucide-react';
import { IPData } from '../types';

interface InfoCardProps {
  data: IPData;
}

export default function InfoCard({ data }: InfoCardProps) {
  const infoItems = [
    { icon: Server, label: 'IP Address', value: data.ip, gradient: 'from-cyan-500 to-blue-500' },
    { icon: MapPin, label: 'Location', value: `${data.city}, ${data.region}`, gradient: 'from-emerald-500 to-teal-500' },
    { icon: Globe, label: 'Country', value: `${data.country} (${data.countryCode})`, gradient: 'from-violet-500 to-purple-500' },
    { icon: Clock, label: 'Timezone', value: data.timezone, gradient: 'from-orange-500 to-red-500' },
    { icon: Wifi, label: 'ISP', value: data.isp, gradient: 'from-pink-500 to-rose-500' },
    { icon: Building, label: 'Organization', value: data.org, gradient: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>

          <div className="relative">
            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>

            <p className="text-cyan-300/70 text-sm font-medium mb-1 uppercase tracking-wider">{item.label}</p>
            <p className="text-white text-lg font-semibold break-words">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
