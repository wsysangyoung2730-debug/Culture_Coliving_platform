import concertBummulPoster from "../assets/programs/program-concert-bummul-poster.png";
import brandSinmaePoster from "../assets/programs/program-brand-sinmae-poster.svg";
import cupJisanPoster from "../assets/programs/program-cup-jisan-poster.svg";
import healthPadongPoster from "../assets/programs/program-health-padong-poster.svg";
import photoManchonPoster from "../assets/programs/program-photo-manchon-poster.svg";
import upcycleSijiPoster from "../assets/programs/program-upcycle-siji-poster.svg";

export type Program = {
  id: number;
  title: string;
  category: "공연" | "클래스" | "세미나" | "체험 부스";
  spaceName: string;
  area: string;
  date: string;
  time: string;
  host: string;
  originalPrice: number;
  residentPrice: number;
  discountRate: number;
  capacity: number;
  posterText: string;
  posterImage?: string;
  shortDescription: string;
  detailDescription: string;
  target: string;
  includes: string;
  refundPolicy: string;
};

export const programs: Program[] = [
  {
    id: 1,
    title: "동네 작은 콘서트",
    category: "공연",
    spaceName: "범물 생활문화 점포",
    area: "범물동",
    date: "2026.07.11",
    time: "19:00-20:10",
    host: "어쿠스틱 듀오 온",
    originalPrice: 15000,
    residentPrice: 7000,
    discountRate: 53,
    capacity: 20,
    posterText: "작은 상가에서 만나는 저녁 음악회",
    posterImage: concertBummulPoster,
    shortDescription: "퇴근 후 동네에서 편하게 듣는 어쿠스틱 라이브 공연입니다.",
    detailDescription:
      "문화관리인 뮤지션 팀이 공간 관리 활동과 함께 월 1회 운영하는 주민 대상 정기 공연입니다.",
    target: "범물동 인근 주민, 청소년, 음악에 관심 있는 누구나",
    includes: "라이브 공연 관람, 짧은 아티스트 토크",
    refundPolicy: "프로그램 시작 24시간 전까지 취소 가능"
  },
  {
    id: 2,
    title: "나만의 컵 만들기 클래스",
    category: "클래스",
    spaceName: "지산 로컬상가 1층",
    area: "지산동",
    date: "2026.07.13",
    time: "14:00-16:00",
    host: "공예 스튜디오 담",
    originalPrice: 28000,
    residentPrice: 12000,
    discountRate: 57,
    capacity: 12,
    posterText: "손으로 만드는 동네의 오후",
    posterImage: cupJisanPoster,
    shortDescription: "기본 도자 재료로 일상에서 사용할 컵을 만드는 주민 클래스입니다.",
    detailDescription:
      "빈 상가를 공방형 창작 거점으로 활용하며 주민과 함께 결과물을 만드는 체험 프로그램입니다.",
    target: "초보자, 가족 단위 주민, 공예를 경험해보고 싶은 주민",
    includes: "기본 재료, 도구 대여, 완성품 후처리 안내",
    refundPolicy: "재료 준비로 인해 시작 48시간 전까지 취소 가능"
  },
  {
    id: 3,
    title: "우리 동네 헬스케어 앱 체험부스",
    category: "체험 부스",
    spaceName: "파동 커뮤니티 상가",
    area: "파동",
    date: "2026.07.18",
    time: "13:00-17:00",
    host: "웰니스 초기 스타트업 루프",
    originalPrice: 5000,
    residentPrice: 0,
    discountRate: 100,
    capacity: 40,
    posterText: "건강 데이터를 쉽게 이해하는 하루",
    posterImage: healthPadongPoster,
    shortDescription: "주민이 직접 앱을 체험하고 건강 관리 기능을 알아보는 오픈 부스입니다.",
    detailDescription:
      "초기 스타트업 팀이 공간 사용 조건으로 주민 대상 서비스 체험과 짧은 설명 세션을 운영합니다.",
    target: "디지털 헬스케어에 관심 있는 주민, 시니어, 보호자",
    includes: "앱 체험, 사용 안내, 간단한 건강 루틴 카드",
    refundPolicy: "무료 프로그램으로 별도 환불 정책 없음"
  },
  {
    id: 4,
    title: "로컬 브랜드 시작 세미나",
    category: "세미나",
    spaceName: "신매 팝업 스튜디오",
    area: "신매동",
    date: "2026.07.20",
    time: "15:00-16:30",
    host: "브랜드 기획팀 서클",
    originalPrice: 18000,
    residentPrice: 8000,
    discountRate: 56,
    capacity: 24,
    posterText: "동네에서 시작하는 작은 브랜드",
    posterImage: brandSinmaePoster,
    shortDescription: "지역 소재와 개인의 관심사를 브랜드로 엮는 입문 세미나입니다.",
    detailDescription:
      "기획자와 디자이너 팀이 주민과 예비 창업자를 대상으로 로컬 브랜드 기초 구조를 공유합니다.",
    target: "예비 창업자, 로컬 활동가, 브랜드 기획에 관심 있는 주민",
    includes: "강의, 사례 자료, 아이디어 정리 워크시트",
    refundPolicy: "프로그램 시작 24시간 전까지 취소 가능"
  },
  {
    id: 5,
    title: "동네 사진 산책 워크숍",
    category: "클래스",
    spaceName: "만촌 크리에이터 스팟",
    area: "만촌동",
    date: "2026.07.25",
    time: "10:00-12:30",
    host: "사진가 이서윤",
    originalPrice: 22000,
    residentPrice: 10000,
    discountRate: 55,
    capacity: 15,
    posterText: "익숙한 골목을 다시 보는 법",
    posterImage: photoManchonPoster,
    shortDescription: "동네를 함께 걸으며 사진으로 기록하고 짧게 공유하는 워크숍입니다.",
    detailDescription:
      "사진 창작자가 작업 공간을 기반으로 주민과 함께 지역의 장면을 기록하는 참여형 프로그램입니다.",
    target: "사진 초보자, 산책을 좋아하는 주민, 청소년",
    includes: "촬영 미션지, 결과 공유 시간, 간단한 보정 팁",
    refundPolicy: "우천 시 일정 변경 또는 전액 환불"
  },
  {
    id: 6,
    title: "가족과 함께하는 업사이클링 클래스",
    category: "클래스",
    spaceName: "시지 생활문화 스튜디오",
    area: "시지동",
    date: "2026.07.26",
    time: "11:00-13:00",
    host: "리메이크 랩",
    originalPrice: 25000,
    residentPrice: 12000,
    discountRate: 52,
    capacity: 18,
    posterText: "버려지는 재료가 가족의 작품이 되는 시간",
    posterImage: upcycleSijiPoster,
    shortDescription: "가족이 함께 생활 폐자재를 활용해 작은 오브제를 만드는 클래스입니다.",
    detailDescription:
      "환경과 창작을 결합한 주민 참여형 프로그램으로, 공간 사용 팀의 월간 문화 기여 활동입니다.",
    target: "초등학생 자녀가 있는 가족, 만들기를 좋아하는 주민",
    includes: "재료, 도구 대여, 완성 작품 포장",
    refundPolicy: "프로그램 시작 48시간 전까지 취소 가능"
  }
];
