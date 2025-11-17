import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import SearchSection from './components/SearchSection'
import ValueProps from './components/ValueProps'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import AppBanner from './components/AppBanner'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <TrustBar />
      <SearchSection />
      <ValueProps />
      <Categories />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <Pricing />
      <AppBanner />
      <Newsletter />
      <FAQ />
      <CTA />

      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="font-semibold">Marketplace</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900" href="#">Freelance talent</a></li>
                <li><a className="hover:text-slate-900" href="#">Vacation stays</a></li>
                <li><a className="hover:text-slate-900" href="#">Local services</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900" href="#">About</a></li>
                <li><a className="hover:text-slate-900" href="#">Careers</a></li>
                <li><a className="hover:text-slate-900" href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Support</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900" href="#">Help Center</a></li>
                <li><a className="hover:text-slate-900" href="#">Safety</a></li>
                <li><a className="hover:text-slate-900" href="#">Cancellation options</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Legal</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-slate-900" href="#">Terms</a></li>
                <li><a className="hover:text-slate-900" href="#">Privacy</a></li>
                <li><a className="hover:text-slate-900" href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-slate-500 text-sm">© {new Date().getFullYear()} Flux Market. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
