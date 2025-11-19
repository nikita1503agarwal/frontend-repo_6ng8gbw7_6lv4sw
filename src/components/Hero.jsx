import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(124,58,237,0.25),rgba(2,6,23,0.6)_60%,rgba(2,6,23,1))]" />
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <svg className="h-full w-full text-slate-700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 1200">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1200" height="1200" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-44 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300" />
              AI Automation Agency
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7 }} className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Automate growth with Silver AI
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-4 text-slate-300 text-lg md:text-xl">
              We design, build and deploy custom AI systems that streamline operations, amplify content, and unlock new revenue — tailored for teams of any size.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Reveal>
                <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-5 py-3 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(139,92,246,0.7)] hover:brightness-110 transition">
                  Book a demo
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-200 hover:bg-white/10 transition">
                  Explore services
                </a>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm text-slate-300/80">
              {['+35% Efficiency','24/7 Agents','Fast ROI'].map((kpi, i) => (
                <Reveal key={kpi} delay={i * 0.05}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">{kpi}</div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Spline hero animation */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative aspect-square w-full">
            <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-slate-900/30 p-2">
              <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-950/60">
                <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-10 blur-2xl opacity-40 bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#ec4899_30%,#f59e0b_60%,transparent_100%)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
