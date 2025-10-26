import { Upload, Printer, MapPin, Bell, Shield, CreditCard } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Easy Uploads",
    desc: "Send PDFs, DOCs, or images from your phone or Drive in seconds.",
  },
  {
    icon: Printer,
    title: "Rich Print Options",
    desc: "Choose A4/A3, color or B/W, and 1–10 copies with notes.",
  },
  {
    icon: MapPin,
    title: "Nearest Vendor",
    desc: "Your order is routed to a partnered shop closest to campus.",
  },
  {
    icon: Bell,
    title: "Live Updates",
    desc: "Track status from Pending to Delivered with push alerts.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    desc: "Files are stored safely in the cloud and auto-deleted on request.",
  },
  {
    icon: CreditCard,
    title: "Simple Payments",
    desc: "Optional UPI/QR for quick settlements. MVP supports mock flows.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to print fast</h2>
          <p className="mt-3 text-slate-600">Built for students and campus vendors with reliability and speed in mind.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
