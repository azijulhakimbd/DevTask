import Logo from "../assets/DevTask.png"
function Navbar() {
  return (
    <nav className="sticky top-4 z-20 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur sm:px-6 animate-slideUp">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="DevTask logo"
            className="h-10 w-10 rounded-2xl object-cover transition-transform duration-250 hover:scale-110"
          />
          <div>
            <p className="text-sm font-semibold text-white">DevTask</p>
            <p className="text-xs text-slate-400">Productivity hub</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#tasks" className="transition-colors duration-250 hover:text-cyan-300">Tasks</a>
          <a href="#notes" className="transition-colors duration-250 hover:text-cyan-300">Notes</a>
          <a href="#focus" className="transition-colors duration-250 hover:text-cyan-300">Focus</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
