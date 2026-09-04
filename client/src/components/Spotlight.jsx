const Spotlight = ({ items, title = 'Spotlight' }) => {
  return (
    <section className="space-y-4 bg-white" aria-labelledby="spotlight-title">
      <div className="px-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e91e8c]">Discover</p>
        <h2 id="spotlight-title" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 lg:grid-cols-5 h-full">
        {items.map((item) => (
          <article key={item.id} className="group overflow-hidden bg-slate-100 ">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-3">
              <p className="truncate text-xs font-medium text-slate-500">{item.category}</p>
              <h3 className="mt-1 truncate text-sm font-semibold text-slate-900">{item.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
