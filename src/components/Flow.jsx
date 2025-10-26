import { FileText, Settings, Users, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Upload & Configure",
    desc: "Add files and select size, color, and copies. Specify delivery location.",
  },
  {
    icon: Settings,
    title: "Auto-Routing",
    desc: "Nearby vendor receives the order instantly with file access.",
  },
  {
    icon: Users,
    title: "Vendor Prints",
    desc: "Vendor marks status as Printing and prepares your order.",
  },
  {
    icon: Truck,
    title: "Out for Delivery",
    desc: "Runner heads to your Hostel/Department with the prints.",
  },
  {
    icon: CheckCircle,
    title: "Delivered",
    desc: "Confirm receipt, leave a note, and view it in My Orders.",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How SnapX works</h2>
          <p className="mt-3 text-slate-600">A simple, real-time workflow from upload to delivery.</p>
        </div>

        <ol className="mt-10 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-2 py-1">Step {idx + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">
            Create your first order
          </a>
          <span className="text-slate-500 text-sm">No signup required for demo preview</span>
        </div>
      </div>
    </section>
  );
}
