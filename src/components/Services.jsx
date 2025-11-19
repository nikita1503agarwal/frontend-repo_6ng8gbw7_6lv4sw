import { Bot, Sparkles, Workflow, MessageSquare, Shield, Rocket } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI Agents & Assistants",
    desc: "Voice, chat and workflow agents that handle support, sales and operations end‑to‑end.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect tools with smart automations across CRM, ops, marketing and finance.",
  },
  {
    icon: MessageSquare,
    title: "Content + Outreach",
    desc: "Personalized content systems for creators and teams to scale without burnout.",
  },
  {
    icon: Shield,
    title: "Data + Guardrails",
    desc: "Private retrieval, analytics and compliance‑first AI that you can trust.",
  },
  {
    icon: Sparkles,
    title: "Model Strategy",
    desc: "From open‑source to frontier models — we pick what fits ROI, speed and safety.",
  },
  {
    icon: Rocket,
    title: "Deployment & MLOps",
    desc: "From prototype to production with monitoring, evals and continuous improvement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(139,92,246,0.1),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we build</h2>
          <p className="mt-3 text-slate-300">Full‑stack automation tailored to your stack and goals.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 text-white shadow-[0_10px_24px_-8px_rgba(139,92,246,0.6)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
