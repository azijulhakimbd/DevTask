function Header({ completedTasks, totalTasks }) {
  return (
    <header className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">DevTask</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Stay focused and capture ideas.</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            A modern productivity hub for managing tasks, notes, and momentum in one place.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
          <span className="block text-2xl font-semibold">{completedTasks}/{totalTasks}</span>
          <span className="text-cyan-200">tasks completed</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
