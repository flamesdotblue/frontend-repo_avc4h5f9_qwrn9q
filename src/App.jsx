import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Flow from "./components/Flow";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} SnapX • Smart Document Printing</p>
        <div className="text-sm text-slate-500 flex items-center gap-4">
          <a href="#features" className="hover:text-slate-700">Features</a>
          <a href="#flow" className="hover:text-slate-700">Workflow</a>
          <a href="#" className="hover:text-slate-700">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Flow />
      </main>
      <Footer />
    </div>
  );
}
