export default function AppBanner() {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col md:flex-row items-center gap-6">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="App" className="h-24 w-24 rounded-xl object-cover" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Get the app</h3>
            <p className="text-slate-600">Book services on the go, chat with pros, and manage projects from anywhere.</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">App Store</button>
            <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50">Google Play</button>
          </div>
        </div>
      </div>
    </section>
  );
}
