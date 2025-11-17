export default function Showcase() {
  const items = [
    {
      tag: 'Freelancer',
      title: 'Brand identity and website design',
      image: 'https://images.unsplash.com/photo-1722503583716-ee384fed4593?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMGlkZW50aXR5JTIwYW5kJTIwd2Vic2l0ZXxlbnwwfDB8fHwxNzYzMzgyOTExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Stay',
      title: 'Cozy cabin with lake view',
      image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1600&auto=format&fit=crop'
    },
    {
      tag: 'Local Pro',
      title: 'Emergency plumbing and repair',
      image: 'https://images.unsplash.com/photo-1657558665549-bd7d82afed8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbWVyZ2VuY3klMjBwbHVtYmluZyUyMGFuZCUyMHJlcGFpcnxlbnwwfDB8fHwxNzYzMzgyOTEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      tag: 'Freelancer',
      title: 'Full‑stack app with AI features',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
    },
    {
      tag: 'Stay',
      title: 'Modern loft in city center',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop'
    },
    {
      tag: 'Local Pro',
      title: 'Math tutoring for high‑school',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop'
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Trending now</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Popular projects, stays, and services people are booking this week.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
              <div className="relative">
                <img src={item.image} alt="showcase" className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-3 left-3 px-2 py-1 text-xs rounded-full bg-white/90 text-slate-800 ring-1 ring-slate-200">{item.tag}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">Starting from $50</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
