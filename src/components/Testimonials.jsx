import { Star } from "lucide-react";

const ReviewCard = ({ quote, name, role, rating, image }) => (
  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
    <div className="absolute inset-0 bg-white/80" />
    <div className="relative p-6">
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-slate-800">“{quote}”</p>
      <p className="mt-3 text-sm text-slate-600">{name} • {role}</p>
    </div>
  </div>
);

export default function Testimonials() {
  const reviews = [
    { quote: "Found a top-notch designer in hours and launched on time.", name: "Maya R.", role: "Startup Founder", rating: 5, image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1600&auto=format&fit=crop" },
    { quote: "Booked a stunning cabin for our offsite—super seamless.", name: "Leo K.", role: "Ops Lead", rating: 5, image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" },
    { quote: "Electrician arrived same day and fixed everything fast.", name: "Anita S.", role: "Homeowner", rating: 5, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop" },
  ];

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">What people say</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">See more</a>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
