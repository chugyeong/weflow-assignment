export const PRODUCTION_PLANS = [
  {
    name: "랜딩페이지",
    tag: "START",
    price: {
      original: 498000,
      sale: 249000,
    },
    features: ["랜딩페이지 1페이지", "3~4일 빠른 제작기간", "반응형 제작 (PC/모바일)", "문의폼 연동", "기본 SEO 설정"],
  },
  {
    name: "홈페이지",
    tag: "GROW",
    price: {
      original: 1980000,
      sale: 990000,
    },
    features: ["홈페이지 5페이지", "1주 빠른 제작기간", "반응형 제작 (PC/모바일)", "문의폼 연동", "카카오톡 상담연동", "기본 SEO 설정"],
  },
  {
    name: "프리미엄",
    tag: "MASTER PREMIUM",
    featured: true,
    price: {
      original: 2980000,
      sale: 1490000,
    },
    features: ["홈페이지 + 랜딩페이지", "1~2주 빠른 제작기간", "반응형 제작 (PC/모바일)", "프리미엄 디자인", "예약·문의 시스템", "SEO 최적화", "광고 전환 구조 설계"],
  },
];

export const CARE_PLANS = [
  {
    name: "WE CARE",
    description: "기본 관리 플랜",
    price: {
      original: 170000,
      sale: 89000,
      suffix: "~",
      unit: "월",
    },
    features: ["유지보수(월 수정) 월 1회", "블로그 : 월 1개", "인스타 : 월 4회 (주 1회)", "스레드 : 월 4회 (주 1회)", "SEO 상단등록"],
  },
  {
    name: "FLOW CARE",
    description: "성장 관리 플랜",
    price: {
      original: 378000,
      sale: 189000,
      suffix: "~",
      unit: "월",
    },
    features: ["유지보수 : 월 3회", "인스타 : 월 8회 (주 2회)", "스레드 : 월 8회 (주 2회)", "블로그 : 월 2회", "네이버 키워드 세팅 할인(149,000 -> 79,000원)", "당근 키워드 광고 세팅 50% 할인(79,000원 -> 39,000원)", "문의 개선", "SEO 상단 등록"],
  },
  {
    name: "WEFLOW CARE",
    description: "올인원 관리 플랜",
    featured: true,
    price: {
      original: 678000,
      sale: 339000,
      suffix: "~",
      unit: "월",
    },
    features: ["유지보수 : 무제한", "블로그 : 월 4회 (주 1회)", "인스타 : 월 12회 (주 3회)", "스레드 : 월 12회 (주 3회)", "네이버 키워드/당근 플레이스 광고 세팅 무료", "월 성과 체크", "랜딩 개선", "광고관리", "SEO 최적화"],
  },
];

export const ADVERTISING_PLANS = [
  {
    name: "네이버 광고",
    description: "키워드 셋팅",
    price: {
      original: 298000,
      sale: 149000,
      suffix: "~",
    },
    features: ["키워드 분석", "광고 세팅 지원", "광고 문구 제작", "문의 구조 연결", "채널 연동 지원", "성과 최적화"],
  },
  {
    name: "당근 플레이스 광고",
    description: "키워드 셋팅",
    price: {
      original: 158000,
      sale: 79000,
      suffix: "~",
    },
    features: ["지역 키워드 분석", "광고 세팅 지원", "광고 문구 제작", "지역 타겟 설정", "랜딩 연결 지원", "성과 최적화"],
  },
];
