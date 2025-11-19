import Reveal from "./Reveal";
import { motion } from "framer-motion";

const industries = [
  "Startups",
  "Enterprises",
  "Creators",
  "Real Estate",
  "E‑commerce",
  "Agencies",
  "Healthcare",
  "Finance",
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for every team</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-slate-300">From solo creators to global orgs — we meet you where you are.</p>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {industries.map((label, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-slate-200">
                  {label}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
