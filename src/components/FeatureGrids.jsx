import { Shield, Star, Clock, CreditCard, Globe2, ThumbsUp } from 'lucide-react'

export default function FeatureGrids() {
  const features = [
    { icon: Shield, title: 'Safe & verified', desc: 'ID verification, secure payments, and dispute resolution keep everyone protected.', image: 'https://images.unsplash.com/photo-1762337681092-ba832887fb30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWZlJTIwJTI2JTIwdmVyaWZpZWR8ZW58MHwwfHx8MTc2MzQzODc5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { icon: Star, title: 'Quality you can trust', desc: 'Ratings, reviews, and Top Pro badges surface the best talent, stays, and services.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1600&auto=format&fit=crop' },
    { icon: Clock, title: 'Flexible & fast', desc: 'Instant booking, quick proposals, and same-day local services when you need them.', image: 'https://images.unsplash.com/photo-1762337681092-ba832887fb30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWZlJTIwJTI2JTIwdmVyaWZpZWR8ZW58MHwwfHx8MTc2MzQzODc5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { icon: CreditCard, title: 'Simple checkout', desc: 'One wallet for projects, stays, and services. Split payments and refunds built-in.', image: 'https://images.unsplash.com/photo-1762337681092-ba832887fb30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWZlJTIwJTI2JTIwdmVyaWZpZWR8ZW58MHwwfHx8MTc2MzQzODc5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { icon: Globe2, title: 'Global reach', desc: 'Hire remotely, book worldwide, or find local pros wherever you are.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
    { icon: ThumbsUp, title: 'Match made for you', desc: 'Smart recommendations based on your needs, location, and budget.', image: 'https://images.unsplash.com/photo-1531972111231-7482a960e109?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Why choose Flux Market?</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">The convenience of multiple platforms, unified into one seamless marketplace.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, image }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
              <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
              <div className="relative p-6">
                <Icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-700 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
