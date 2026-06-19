import { ADMIN_STAT_TONE_CLASS_MAP } from "../../../constants/admin";

const AdminStatGrid = ({ items = [] }) => {
  return (
    <div className="mb-6 grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[640px]:mb-4 max-[640px]:gap-2.5 max-[520px]:grid-cols-1">
      {items.map((item) => (
        <article
          key={item.label}
          className={`relative overflow-hidden rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.064),rgba(255,255,255,0.022))] p-4 shadow-we-gray transition duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-current before:opacity-70 hover:-translate-y-0.5 hover:bg-white/[0.055] hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)] max-[640px]:rounded-[10px] max-[640px]:p-3 ${ADMIN_STAT_TONE_CLASS_MAP[item.tone] || ADMIN_STAT_TONE_CLASS_MAP.blue}`}>
          <span className="text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-gray-500">
            {item.label}
          </span>
          <strong className="mt-1.5 block text-[30px] font-black text-we-white max-[640px]:text-[21px]">
            {item.value}
          </strong>
          {item.caption && <p className="mt-1 text-sm text-we-gray-500 max-[640px]:text-xs">{item.caption}</p>}
        </article>
      ))}
    </div>
  );
};

export default AdminStatGrid;
