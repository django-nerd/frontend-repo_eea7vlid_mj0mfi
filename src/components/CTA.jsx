export default function CTA() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Join Flux Market today</h2>
            <p className="mt-2 text-blue-100">Whether youre hiring, hosting, or helping, we make it easy to grow your income and get things done.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex justify-center items-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium shadow-sm hover:shadow transition">Create account</a>
            <a href="#explore" className="inline-flex justify-center items-center rounded-full ring-1 ring-white/60 text-white px-6 py-3 text-sm font-medium hover:bg-white/10">Explore first</a>
          </div>
        </div>
      </div>
    </section>
  )
}
