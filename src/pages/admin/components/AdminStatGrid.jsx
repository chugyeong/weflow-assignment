const toneClassMap = {
  blue: "from-we-blue-300/24 to-we-blue-500/8 text-we-blue-100",
  cyan: "from-we-blue-100/20 to-we-blue-300/8 text-we-blue-100",
  green: "from-emerald-400/20 to-emerald-500/8 text-emerald-200",
  amber: "from-amber-300/22 to-amber-500/8 text-amber-200",
  violet: "from-violet-300/20 to-violet-500/8 text-violet-200",
};

const AdminStatGrid = ({ items = [] }) => {
  return (
    <div className="mb-6 grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[520px]:grid-cols-1">
      {items.map((item) => (
        <article
          key={item.label}
          className={`relative overflow-hidden rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.064),rgba(255,255,255,0.022))] p-4 shadow-we-gray transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-current before:opacity-70 hover:-translate-y-0.5 hover:bg-white/[0.055] hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)] ${toneClassMap[item.tone] || toneClassMap.blue}`}>
          <span className="text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-gray-500">
            {item.label}
          </span>
          <strong className="mt-2 block text-[30px] font-black text-we-white">
            {item.value}
          </strong>
          {item.caption && <p className="mt-1 text-sm text-we-gray-500">{item.caption}</p>}
        </article>
      ))}
    </div>
  );
};

export default AdminStatGrid;
