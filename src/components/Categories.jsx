import { Code2, PenTool, Camera, Brush, Megaphone, Briefcase, Wrench, Sparkles, CalendarDays, Home, ChefHat } from "lucide-react";

const CategoryCard = ({ icon: Icon, title, items }) => (
  <div className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 text-indigo-600" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-indigo-50">
          {it}
        </span>
      ))}
    </div>
  </div>
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
          <CategoryCard icon={Code2} title="Freelancers" items={["Web Dev","Mobile Apps","AI/ML","Data","DevOps","Game Dev"]} />
          <CategoryCard icon={PenTool} title="Design & Creative" items={["Branding","UI/UX","Illustration","Animation","3D","Product"]} />
          <CategoryCard icon={Megaphone} title="Marketing" items={["SEO","Social Ads","Email","Influencers","Content","PR"]} />
          <CategoryCard icon={Briefcase} title="Business" items={["Accounting","Legal","Consulting","HR","Project Mgmt","PMO"]} />
          <CategoryCard icon={Home} title="Stays" items={["Beachfront","Cabins","City Lofts","Countryside","Pet‑friendly","Long‑term"]} />
          <CategoryCard icon={CalendarDays} title="Experiences" items={["Food Tours","Workshops","Adventures","Nightlife","Culture","Wellness"]} />
          <CategoryCard icon={Wrench} title="Local Pros" items={["Electricians","Plumbers","Cleaners","Movers","Painters","Carpenters"]} />
          <CategoryCard icon={ChefHat} title="Home & Lifestyle" items={["Catering","Event Planning","Photography","Makeup","Decor","Music"]} />
        </div>
      </div>
    </section>
  );
}
