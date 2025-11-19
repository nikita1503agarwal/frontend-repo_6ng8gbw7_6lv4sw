import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-amber-400/20 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to unlock time and ROI?</h3>
                <p className="mt-2 text-slate-200/90">Tell us about your workflows and we’ll propose a high‑impact AI roadmap.</p>
              </div>
              <form className="grid gap-3 md:grid-cols-3">
                <input required placeholder="Your email" type="email" className="md:col-span-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-violet-500/60" />
                <motion.button whileTap={{ scale: 0.98 }} type="submit" className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-5 py-3 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(139,92,246,0.7)] hover:brightness-110 transition">Book a demo</motion.button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
