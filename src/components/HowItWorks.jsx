import { Search, MessageSquare, Handshake, CreditCard } from "lucide-react";

const Step = ({ icon: Icon, title, desc, image }) => (
  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
    <div className="absolute inset-0 bg-white/75" />
    <div className="relative p-6">
      <Icon className="h-7 w-7 text-indigo-600" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-slate-700 mt-1">{desc}</p>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Step icon={Search} title="Discover" desc="Explore vetted freelancers, unique stays, and trusted local pros." image="https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1600&auto=format&fit=crop" />
          <Step icon={MessageSquare} title="Connect" desc="Chat, compare offers, and align on scope, dates, and budget." image="https://images.unsplash.com/photo-1552960394-c81add8de6e6?q=80&w=1600&auto=format&fit=crop" />
          <Step icon={Handshake} title="Book" desc="Lock in your project, stay, or service with transparent terms." image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop" />
          <Step icon={CreditCard} title="Pay secure" desc="Escrow checkout releases funds only when milestones are met." image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
}
