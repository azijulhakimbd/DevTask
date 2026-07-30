function Header({ completedTasks, totalTasks }) {
  return (
    <header className="card-hover p-6 sm:p-8 animate-slideUp">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-3">
          <img
            src="/DevTask.png"
            alt="DevTask logo"
            className="h-12 w-12 rounded-2xl object-cover transition-transform duration-250 hover:scale-110"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">DevTask</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Stay focused and capture ideas.</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              A modern productivity hub for managing tasks, notes, and momentum in one place.
            </p>
          </div>
        </div>

        <div className="card-base rounded-2xl border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100 hover:bg-cyan-500/15 transition-all duration-250">
          <span className="block text-2xl font-semibold">{completedTasks}/{totalTasks}</span>
          <span className="text-cyan-200 text-xs">tasks completed</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
