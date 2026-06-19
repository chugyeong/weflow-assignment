export const ADMIN_STAT_TONE_CLASS_MAP = {
  blue: "from-we-blue-300/24 to-we-blue-500/8 text-we-blue-100",
  cyan: "from-we-blue-100/20 to-we-blue-300/8 text-we-blue-100",
  green: "from-emerald-400/20 to-emerald-500/8 text-emerald-200",
  amber: "from-amber-300/22 to-amber-500/8 text-amber-200",
  violet: "from-violet-300/20 to-violet-500/8 text-violet-200",
};

export const REQUEST_PAGE_CONFIG = {
  reservations: {
    type: "reservation",
    title: "예약 관리",
    description: "예약 신청자의 희망 일정과 상태를 관리합니다.",
    excelFileName: "WEFLOW_예약_목록",
    downloadLabel: "예약 엑셀",
    totalLabel: "전체 예약",
  },
  inquiries: {
    type: "diagnosis",
    title: "문의 관리",
    description: "무료진단 신청 내역과 상담 진행 상태를 관리합니다.",
    excelFileName: "WEFLOW_문의_목록",
    downloadLabel: "문의 엑셀",
    totalLabel: "전체 문의",
  },
};
