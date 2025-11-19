import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We map your processes, stack and KPIs to spot high‑leverage automation bets.",
  },
  {
    title: "Design & Prototype",
    desc: "Low‑risk pilots with clear success metrics and a path to production.",
  },
  {
    title: "Build & Integrate",
    desc: "We implement agents, automations and data pipelines across your tools.",
  },
  {
    title: "Measure & Scale",
    desc: "Continuous improvement with analytics, guardrails and governance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">How we work</h2>
            <p className="mt-3 text-slate-300">A proven framework to deliver ROI quickly and safely.</p>

            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-violet-400" />
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="text-slate-300/90">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(139,92,246,0.15),transparent_60%)] p-8">
            <div className="grid grid-cols-2 gap-4">
              {["Average 35% process time saved","< 4 weeks to pilot","Plug into your stack","On‑prem or cloud"].map((kpi) => (
                <div key={kpi} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">{kpi}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
