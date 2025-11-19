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
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for every team</h2>
            <p className="mt-3 text-slate-300">From solo creators to global orgs — we meet you where you are.</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {industries.map((label) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-slate-200">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
