import { useEffect } from "react";
import { X } from "lucide-react";
import { POLICY_MODAL_COPY } from "../../constants/policy";

const PolicyModal = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [type]);

  if (!type) return null;

  const content = POLICY_MODAL_COPY[type];

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/65 px-5 backdrop-blur-sm max-[640px]:px-3.5"
      role="presentation"
      onMouseDown={onClose}
      onWheel={(event) => event.preventDefault()}
      onTouchMove={(event) => event.preventDefault()}>
      <section
        className="w-full max-w-[680px] animate-[fadeUp_0.24s_ease-out_both] rounded-[16px] border border-white/10 bg-[#0b1020] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.48)] max-[640px]:rounded-[14px] max-[640px]:p-3.5"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-center justify-between gap-4 max-[640px]:mb-3.5">
          <h2 id="policy-modal-title" className="text-2xl font-black text-we-white max-[640px]:text-lg">
            {content.title}
          </h2>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-we-gray-300 transition hover:border-we-blue-300 hover:text-we-white max-[640px]:h-8 max-[640px]:w-8 max-[640px]:rounded-[8px]"
            onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto whitespace-pre-line break-keep pr-2 leading-[1.8] text-we-gray-300 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] max-[640px]:text-[13px] max-[640px]:leading-[1.55] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-we-gray-700">
          {content.body}
        </div>
      </section>
    </div>
  );
};

export default PolicyModal;
