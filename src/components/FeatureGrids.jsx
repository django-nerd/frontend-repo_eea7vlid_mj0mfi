import { Shield, Star, Clock, CreditCard, Globe2, ThumbsUp } from 'lucide-react'

export default function FeatureGrids() {
  const features = [
    { icon: Shield, title: 'Safe & verified', desc: 'ID verification, secure payments, and dispute resolution keep everyone protected.' },
    { icon: Star, title: 'Quality you can trust', desc: 'Ratings, reviews, and Top Pro badges surface the best talent, stays, and services.' },
    { icon: Clock, title: 'Flexible & fast', desc: 'Instant booking, quick proposals, and same-day local services when you need them.' },
    { icon: CreditCard, title: 'Simple checkout', desc: 'One wallet for projects, stays, and services. Split payments and refunds built-in.' },
    { icon: Globe2, title: 'Global reach', desc: 'Hire remotely, book worldwide, or find local pros wherever you are.' },
    { icon: ThumbsUp, title: 'Match made for you', desc: 'Smart recommendations based on your needs, location, and budget.' },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Why choose Flux Market?</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">The convenience of multiple platforms, unified into one seamless marketplace.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl ring-1 ring-slate-200 p-6 bg-white shadow-sm">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
