import { Menu, Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white font-bold">F</div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-800">Flux Market</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#explore" className="hover:text-slate-900 transition-colors">Explore</a>
            <a href="#clients" className="hover:text-slate-900 transition-colors">For Clients</a>
            <a href="#freelancers" className="hover:text-slate-900 transition-colors">For Freelancers</a>
            <a href="#hosts" className="hover:text-slate-900 transition-colors">For Hosts</a>
            <a href="#pros" className="hover:text-slate-900 transition-colors">For Pros</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm border border-slate-300 hover:border-slate-400 text-slate-700 transition-colors">
              <User className="h-4 w-4" />
              <span>Log in</span>
            </button>
            <button className="inline-flex md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Menu className="h-5 w-5 text-slate-700" />
            </button>
            <a href="#get-started" className="hidden md:inline-flex bg-gradient-to-tr from-blue-600 to-indigo-500 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-shadow">Get started</a>
          </div>
        </div>
      </div>
    </header>
  )
}
