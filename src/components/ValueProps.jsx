import { ShieldCheck, Award, CheckCircle2, Globe2, Building2 } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: "Protected payments",
      desc: "Escrow-style checkout keeps funds safe until work is approved.",
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: "Vetted talent & hosts",
      desc: "Ratings, reviews, and ID verification give you confidence.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-sky-600" />,
      title: "Guaranteed delivery",
      desc: "Clear milestones, deadlines, and dispute resolution.",
    },
    {
      icon: <Globe2 className="h-6 w-6 text-rose-600" />,
      title: "Global reach",
      desc: "Hire worldwide, book anywhere, and find local pros instantly.",
    },
    {
      icon: <Building2 className="h-6 w-6 text-amber-600" />,
      title: "For teams & enterprise",
      desc: "Multi-seat tools, budgets, and consolidated billing.",
    },
  ];

  return (
    <section className="py-12 border-y border-slate-200/70 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3 shadow-sm"
            >
              <div className="shrink-0">{it.icon}</div>
              <div>
                <p className="font-semibold">{it.title}</p>
                <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
