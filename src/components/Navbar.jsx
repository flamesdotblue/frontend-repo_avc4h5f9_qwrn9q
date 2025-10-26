import { Home, User, Upload } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">
              S
            </div>
            <span className="font-semibold text-xl">SnapX</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#home" className="hover:text-blue-600 transition flex items-center gap-2"><Home size={18}/>Home</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#flow" className="hover:text-blue-600 transition">How it works</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50">
              <User size={18}/> Login
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              <Upload size={18}/> Upload
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
