import { Briefcase, Home, Wrench, MapPin } from 'lucide-react'

export default function SearchSection() {
  return (
    <section id="explore" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">What are you looking for?</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <button className="group rounded-xl p-4 ring-1 ring-slate-200 hover:ring-slate-300 text-left flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Hire a freelancer</p>
                  <p className="text-xs text-slate-500">Design, dev, marketing, more</p>
                </div>
              </button>
              <button className="group rounded-xl p-4 ring-1 ring-slate-200 hover:ring-slate-300 text-left flex items-center gap-3">
                <Home className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Book a stay</p>
                  <p className="text-xs text-slate-500">Apartments, cabins, unique stays</p>
                </div>
              </button>
              <button className="group rounded-xl p-4 ring-1 ring-slate-200 hover:ring-slate-300 text-left flex items-center gap-3">
                <Wrench className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Find a local pro</p>
                  <p className="text-xs text-slate-500">Repairs, lessons, home services</p>
                </div>
              </button>
            </div>

            <div className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3">
              <div className="flex items-center gap-2 rounded-xl ring-1 ring-slate-200 px-3 py-2 bg-white">
                <MapPin className="h-4 w-4 text-slate-500" />
                <input placeholder="City, area or 'near me'" className="w-full outline-none text-sm placeholder:text-slate-400" />
              </div>
              <button className="rounded-xl bg-slate-900 text-white px-6 py-2 text-sm font-medium hover:bg-slate-800">Search</button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Start earning on Flux</h3>
            <p className="text-slate-300 text-sm">List your services, rent out your space, or offer local expertise. Flexible schedules, secure payments.</p>
            <a href="#get-started" className="mt-4 inline-flex rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium">Become a partner</a>
          </div>
        </div>
      </div>
    </section>
  )
}
