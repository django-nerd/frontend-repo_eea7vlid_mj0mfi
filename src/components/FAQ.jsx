const faqs = [
  {
    q: "How is this different from other marketplaces?",
    a: "It unifies freelance work, vacation rentals, and local services with one account, one checkout, and consistent protections.",
  },
  {
    q: "Is payment secure?",
    a: "Yes. Funds are held until milestones are approved or stays/services are delivered as agreed.",
  },
  {
    q: "Can businesses use this?",
    a: "Absolutely. Team features include budgets, seats, compliance tools, and consolidated billing.",
  },
  {
    q: "Do you verify providers?",
    a: "We use identity checks, ratings, and historical performance data to build trust.",
  },
];

export default function FAQ() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
