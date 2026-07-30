function Navbar() {
  return (
    <nav className="sticky top-4 z-20 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-lg text-cyan-300">
            ✓
          </div>
          <div>
            <p className="text-sm font-semibold text-white">DevTask</p>
            <p className="text-xs text-slate-400">Productivity hub</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#tasks" className="transition hover:text-cyan-300">Tasks</a>
          <a href="#notes" className="transition hover:text-cyan-300">Notes</a>
          <a href="#focus" className="transition hover:text-cyan-300">Focus</a>
        </div>

        <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          + New task
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
