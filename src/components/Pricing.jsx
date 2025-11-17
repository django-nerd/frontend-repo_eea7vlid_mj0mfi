export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      desc: "Post a job, message providers, pay per booking.",
      features: ["Unlimited browsing","Secure checkout","Basic support"],
      cta: "Get started"
    },
    {
      name: "Pro",
      price: "$19/mo",
      desc: "Advanced tools for frequent hiring and bookings.",
      features: ["Talent matching","Priority support","Multi-project boards"],
      cta: "Try Pro"
    },
    {
      name: "Business",
      price: "Contact",
      desc: "Compliance, budgets, and team management.",
      features: ["SAML SSO","Spend controls","Consolidated billing"],
      cta: "Talk to sales"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center">Simple pricing</h2>
        <p className="text-slate-600 text-center mt-2">Only pay for what you need. Upgrade anytime.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <span className="text-sm text-slate-500">{p.desc}</span>
              </div>
              <p className="mt-4 text-3xl font-bold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-indigo-600 text-white py-2.5 hover:bg-indigo-700">{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
