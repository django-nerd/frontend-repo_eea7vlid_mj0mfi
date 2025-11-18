import { Code2, PenTool, Megaphone, Briefcase, Wrench, CalendarDays, Home, ChefHat } from "lucide-react";

const CategoryCard = ({ icon: Icon, title, items, image }) => (
  <a href="#" className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
    <div className="relative p-5 backdrop-blur-[1px]">
      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-xs text-slate-800 ring-1 ring-slate-200">
        <Icon className="h-4 w-4 text-indigo-600" />
        <span className="font-medium">{title}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="text-[11px] px-2 py-1 rounded-full bg-white/85 text-slate-800 ring-1 ring-slate-200 group-hover:bg-white"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default function Categories() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">Browse by category</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">See all</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CategoryCard
            icon={Code2}
            title="Freelancers"
            image="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop"
            items={["Web Dev","Mobile Apps","AI/ML","Data","DevOps","Game Dev"]}
          />
          <CategoryCard
            icon={PenTool}
            title="Design & Creative"
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
            items={["Branding","UI/UX","Illustration","Animation","3D","Product"]}
          />
          <CategoryCard
            icon={Megaphone}
            title="Marketing"
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            items={["SEO","Social Ads","Email","Influencers","Content","PR"]}
          />
          <CategoryCard
            icon={Briefcase}
            title="Business"
            image="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop"
            items={["Accounting","Legal","Consulting","HR","Project Mgmt","PMO"]}
          />
          <CategoryCard
            icon={Home}
            title="Stays"
            image="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f?q=80&w=1600&auto=format&fit=crop"
            items={["Beachfront","Cabins","City Lofts","Countryside","Pet‑friendly","Long‑term"]}
          />
          <CategoryCard
            icon={CalendarDays}
            title="Experiences"
            image="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            items={["Food Tours","Workshops","Adventures","Nightlife","Culture","Wellness"]}
          />
          <CategoryCard
            icon={Wrench}
            title="Local Pros"
            image="https://images.unsplash.com/photo-1624704769066-991d31c7142a?q=80&w=1600&auto=format&fit=crop"
            items={["Electricians","Plumbers","Cleaners","Movers","Painters","Carpenters"]}
          />
          <CategoryCard
            icon={ChefHat}
            title="Home & Lifestyle"
            image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
            items={["Catering","Event Planning","Photography","Makeup","Decor","Music"]}
          />
        </div>
      </div>
    </section>
  );
}
