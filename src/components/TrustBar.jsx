import { Star, Shield, Zap, Users } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { icon: <Star className="h-5 w-5 text-amber-500" />, label: "Avg. 4.9/5 rating" },
    { icon: <Shield className="h-5 w-5 text-emerald-600" />, label: "Payment protection" },
    { icon: <Zap className="h-5 w-5 text-indigo-600" />, label: "24/7 support" },
    { icon: <Users className="h-5 w-5 text-sky-600" />, label: "Global community" },
  ];

  return (
    <div className="border-y border-slate-200 bg-white/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              {s.icon}
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
