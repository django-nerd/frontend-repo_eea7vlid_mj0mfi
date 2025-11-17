export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full ring-1 ring-emerald-200">All-in-one marketplace<span className="inline-block h-1 w-1 rounded-full bg-emerald-500"/></p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Hire talent, book stays, and find local pros — in one place
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              The best of freelance platforms, vacation rentals, and home services combined. Post a job, book a home, or schedule a pro — all with secure payments and trusted reviews.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#explore" className="inline-flex justify-center items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition">Explore marketplace</a>
              <a href="#get-started" className="inline-flex justify-center items-center rounded-full bg-white ring-1 ring-slate-300 text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-50">Get started</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">120k+</p>
                <p className="text-sm text-slate-500">Active freelancers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">45k+</p>
                <p className="text-sm text-slate-500">Verified hosts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">300+</p>
                <p className="text-sm text-slate-500">Local services</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop" alt="collage" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-800">Top rated pros</p>
              <p className="text-xs text-slate-500">Trusted by millions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
