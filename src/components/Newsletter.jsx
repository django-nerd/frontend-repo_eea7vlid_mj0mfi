export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-semibold">Stay in the loop</h3>
          <p className="text-white/80 mt-1">Product updates, featured talent, new stays, and local pro tips.</p>
          <div className="mt-5 flex gap-2">
            <input type="email" placeholder="you@company.com" className="w-full rounded-lg px-4 py-2.5 text-slate-900" />
            <button className="px-4 py-2.5 rounded-lg bg-black/20 hover:bg-black/30">Subscribe</button>
          </div>
          <p className="text-xs text-white/70 mt-2">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  );
}
