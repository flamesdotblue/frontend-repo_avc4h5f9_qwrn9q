import { Rocket, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-white"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16 sm:py-20 lg:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200 mb-4">
              <Rocket size={14}/> Print & deliver in under 20 minutes
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Smart campus printing, delivered to your door.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Upload PDFs, DOCs, or images. SnapX routes your order to the nearest vendor and delivers fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">
                Get Started
              </a>
              <a href="#flow" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><Clock size={16}/> 20-min delivery</div>
              <div className="inline-flex items-center gap-2"><Shield size={16}/> Secure storage</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-28 rounded-xl bg-blue-100"/>
                <div className="h-28 rounded-xl bg-blue-200"/>
                <div className="h-28 rounded-xl bg-blue-300"/>
                <div className="h-28 rounded-xl bg-blue-300"/>
                <div className="h-28 rounded-xl bg-blue-100"/>
                <div className="h-28 rounded-xl bg-blue-200"/>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-slate-200 p-3">
                  <div className="text-slate-900 font-medium">A4, B/W, 2 copies</div>
                  <div className="text-slate-500">CS Dept • Out for Delivery</div>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <div className="text-slate-900 font-medium">A3, Color, 1 copy</div>
                  <div className="text-slate-500">Hostel G5 • Printing</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 hidden md:block">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-md w-56">
                <div className="text-xs text-slate-500">Live Status</div>
                <div className="mt-2 text-sm">
                  <div className="flex items-center justify-between"><span>Pending</span><span className="text-green-600">✓</span></div>
                  <div className="flex items-center justify-between"><span>Printing</span><span className="text-green-600">✓</span></div>
                  <div className="flex items-center justify-between"><span>Out for Delivery</span><span className="text-yellow-600">•</span></div>
                  <div className="flex items-center justify-between"><span>Delivered</span><span className="text-slate-400">—</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
