function StatCard({ label, value, accent }) {
  return (
    <div className="card-hover p-4 sm:p-5 text-center hover:scale-105 transition-transform duration-250 animate-fadeIn">
      <div className={`mb-3 inline-flex rounded-2xl px-3 py-2 text-sm font-semibold ${accent}`}>
        {label}
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

export default StatCard;
