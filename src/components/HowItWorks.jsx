import { Search, MessageSquare, Handshake, CreditCard } from "lucide-react";

const Step = ({ icon: Icon, title, desc }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-6">
    <Icon className="h-7 w-7 text-indigo-600" />
    <h3 className="mt-3 font-semibold">{title}</h3>
    <p className="text-sm text-slate-600 mt-1">{desc}</p>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Step icon={Search} title="Discover" desc="Explore vetted freelancers, unique stays, and trusted local pros." />
          <Step icon={MessageSquare} title="Connect" desc="Chat, compare offers, and align on scope, dates, and budget." />
          <Step icon={Handshake} title="Book" desc="Lock in your project, stay, or service with transparent terms." />
          <Step icon={CreditCard} title="Pay secure" desc="Escrow checkout releases funds only when milestones are met." />
        </div>
      </div>
    </section>
  );
}
