const ProcessCardList = ({ items = [] }) => {
  return (
    <ul className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-3.5">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <li
            key={item.title}
            className="rounded-[16px] border border-white/10 bg-white/[0.045] p-[22px] shadow-we-gray backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-we-blue-300/70 max-[640px]:rounded-[13px] max-[640px]:p-3.5">
            {Icon && (
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-we-blue-100">
                <Icon size={20} />
              </div>
            )}
            <span className="mt-[18px] block text-xs font-extrabold text-we-blue-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl text-we-white max-[640px]:text-base">{item.title}</h3>
            <p className="mt-2 leading-[1.7] text-we-gray-500 max-[640px]:text-[13px] max-[640px]:leading-[1.55]">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProcessCardList;
