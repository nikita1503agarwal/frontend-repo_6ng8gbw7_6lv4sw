import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (label, href) => (
    <a
      key={label}
      href={href}
      className="text-slate-200/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Brand */}
            <a href="#top" className="flex items-center gap-2">
              <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_-6px_rgba(168,85,247,0.7)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Silver AI</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItem("Services", "#services")}
              {navItem("Industries", "#industries")}
              {navItem("Process", "#process")}
            </nav>

            {/* Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
              >
                Contact
              </a>
              <a
                href="#cta"
                className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(139,92,246,0.7)] hover:brightness-110 transition"
              >
                Book a demo
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4">
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-slate-200/90">Services</a>
                <a href="#industries" className="text-slate-200/90">Industries</a>
                <a href="#process" className="text-slate-200/90">Process</a>
                <a href="#cta" className="rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white text-center">Book a demo</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
