const SectionTitle = ({ title, desc, action, align = "left" }) => {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 flex items-end gap-5 max-[640px]:mb-6 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2.5 ${
        isCentered ? "justify-center text-center" : "justify-between"
      }`}>
      <div className={isCentered ? "flex-none max-[640px]:w-full" : "min-w-0 flex-1"}>
        <h2 className="max-w-[820px] break-keep text-[clamp(30px,4vw,48px)] font-black leading-[1.12] tracking-[0] text-we-white max-[640px]:break-normal max-[640px]:text-[23px] max-[640px]:leading-[1.18] max-[640px]:[overflow-wrap:anywhere]">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 max-w-[720px] break-keep leading-[1.8] text-we-gray-400 max-[640px]:break-normal max-[640px]:text-[13px] max-[640px]:leading-[1.55] max-[640px]:[overflow-wrap:anywhere]">
            {desc}
          </p>
        )}
      </div>
      {action && (
        <div className="shrink-0 [&_button]:flex [&_button]:items-center [&_button]:gap-[5px] [&_button]:rounded-full [&_button]:border [&_button]:border-white/10 [&_button]:px-4 [&_button]:py-2 [&_button]:text-[clamp(14px,1.5vw,16px)] [&_button]:font-extrabold [&_button]:text-we-blue-100 [&_button]:transition [&_button:hover]:bg-white/5 max-[640px]:[&_button]:px-2.5 max-[640px]:[&_button]:py-1.5 max-[640px]:[&_button]:text-[13px]">
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
