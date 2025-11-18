export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden grid lg:grid-cols-2 gap-6 items-center rounded-2xl p-8 text-white shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/90 to-indigo-600/90" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold">Join Flux Market today</h2>
            <p className="mt-2 text-blue-100">Whether you're hiring, hosting, or helping, we make it easy to grow your income and get things done.</p>
          </div>
          <div className="relative flex gap-3">
            <a href="#" className="inline-flex justify-center items-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition">Create account</a>
            <a href="#explore" className="inline-flex justify-center items-center rounded-full ring-1 ring-white/60 text-white px-6 py-3 text-sm font-medium hover:bg-white/10">Explore first</a>
          </div>
        </div>
      </div>
    </section>
  )
}
