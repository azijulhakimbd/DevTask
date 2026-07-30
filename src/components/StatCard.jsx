function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-black/20 backdrop-blur">
      <div className={`mb-3 inline-flex rounded-2xl px-3 py-2 text-sm font-semibold ${accent}`}>
        {label}
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default StatCard;
