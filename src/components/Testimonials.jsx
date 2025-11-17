import { Star } from "lucide-react";

const ReviewCard = ({ quote, name, role, rating }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-6">
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
    <p className="mt-3 text-slate-800">“{quote}”</p>
    <p className="mt-3 text-sm text-slate-600">{name} • {role}</p>
  </div>
);

export default function Testimonials() {
  const reviews = [
    { quote: "Found a top-notch designer in hours and launched on time.", name: "Maya R.", role: "Startup Founder", rating: 5 },
    { quote: "Booked a stunning cabin for our offsite—super seamless.", name: "Leo K.", role: "Ops Lead", rating: 5 },
    { quote: "Electrician arrived same day and fixed everything fast.", name: "Anita S.", role: "Homeowner", rating: 5 },
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
