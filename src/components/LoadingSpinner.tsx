export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-4 border-4 border-cyan-400/30 rounded-full"></div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-cyan-300 font-semibold text-lg">Tracking IP Address</p>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}
