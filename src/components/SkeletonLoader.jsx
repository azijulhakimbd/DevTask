export function CardSkeleton() {
  return (
    <div className="card-base p-4 space-y-3 animate-fadeIn">
      <div className="skeleton h-6 w-1/2 rounded-lg" />
      <div className="skeleton h-4 w-full rounded-lg" />
      <div className="skeleton h-4 w-3/4 rounded-lg" />
      <div className="flex gap-2">
        <div className="skeleton h-8 w-16 rounded-lg" />
        <div className="skeleton h-8 w-16 rounded-lg" />
      </div>
    </div>
  );
}

export function ListSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card-base p-4 animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
          <div className="skeleton h-5 w-2/3 rounded-lg mb-2" />
          <div className="skeleton h-4 w-full rounded-lg mb-2" />
          <div className="skeleton h-4 w-1/2 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
