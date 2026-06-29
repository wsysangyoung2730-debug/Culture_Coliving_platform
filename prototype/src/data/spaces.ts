export type Space = {
  id: number;
  name: string;
  area: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
  size: string;
  floor: string;
  remainingUnits: number;
  totalUnits: number;
  status: "신청 가능" | "마감";
  monthlyCost: string;
  recommendedFor: string[];
  shortDescription: string;
  facility: string;
  condition: string;
  programExample: string;
};

export const spaces: Space[] = [
  {
    id: 1,
    name: "지산 로컬상가 1층",
    area: "지산동",
    address: "대구 수성구 지산동 일대",
    lat: 35.8229,
    lng: 128.6326,
    type: "빈 상가",
    size: "약 24㎡",
    floor: "1층",
    remainingUnits: 2,
    totalUnits: 3,
    status: "신청 가능",
    monthlyCost: "조건부 감면",
    recommendedFor: ["소규모 클래스", "공방", "전시", "음악 모임"],
    shortDescription:
      "주거지와 가까운 1층 빈 상가로, 주민 대상 원데이 클래스나 소규모 전시에 적합한 공간입니다.",
    facility: "기본 조명, 전기 사용 가능, 간단한 테이블 배치 가능",
    condition: "월 1회 주민 대상 문화 프로그램 운영과 기본 시설 관리가 필요합니다.",
    programExample: "도자기 클래스, 그림 모임, 소규모 전시, 창작 워크숍"
  },
  {
    id: 2,
    name: "범물 생활문화 점포",
    area: "범물동",
    address: "대구 수성구 범물동 일대",
    lat: 35.8172,
    lng: 128.6407,
    type: "빈 상가",
    size: "약 31㎡",
    floor: "1층",
    remainingUnits: 1,
    totalUnits: 2,
    status: "신청 가능",
    monthlyCost: "저비용 사용",
    recommendedFor: ["공연 연습", "작은 공연", "음악 클래스"],
    shortDescription:
      "동네 상권 안에 위치한 소형 상가로, 작은 공연과 음악 기반 프로그램 운영에 적합합니다.",
    facility: "방음 보강 필요, 전기 사용 가능, 소규모 관람 좌석 배치 가능",
    condition: "월 1회 주민 대상 공연 또는 음악 프로그램 운영이 필요합니다.",
    programExample: "동네 작은 콘서트, 악기 체험 클래스, 청소년 음악 워크숍"
  },
  {
    id: 3,
    name: "파동 커뮤니티 상가",
    area: "파동",
    address: "대구 수성구 파동 일대",
    lat: 35.8163,
    lng: 128.6152,
    type: "빈 상가",
    size: "약 42㎡",
    floor: "1층",
    remainingUnits: 0,
    totalUnits: 2,
    status: "마감",
    monthlyCost: "조건부 감면",
    recommendedFor: ["세미나", "체험 부스", "스타트업 쇼케이스"],
    shortDescription:
      "비교적 넓은 면적의 상가형 공간으로, 체험 부스와 주민 대상 세미나 운영에 적합합니다.",
    facility: "프로젝터 설치 가능, 테이블형 배치 가능, 간단한 팝업 운영 가능",
    condition: "월 1회 주민 대상 세미나 또는 체험형 프로그램 운영이 필요합니다.",
    programExample: "헬스케어 앱 체험부스, 로컬 창업 세미나, 디지털 기기 활용 교육"
  },
  {
    id: 4,
    name: "만촌 크리에이터 스팟",
    area: "만촌동",
    address: "대구 수성구 만촌동 일대",
    lat: 35.8706,
    lng: 128.6493,
    type: "빈 상가",
    size: "약 28㎡",
    floor: "2층",
    remainingUnits: 3,
    totalUnits: 4,
    status: "신청 가능",
    monthlyCost: "저비용 사용",
    recommendedFor: ["디자인 작업실", "소규모 전시", "기획 회의"],
    shortDescription:
      "작업실과 전시를 함께 운영할 수 있는 소형 상가 공간입니다. 디자인, 사진, 기획 팀에게 적합합니다.",
    facility: "벽면 전시 가능, 책상 배치 가능, 자연광 일부 유입",
    condition: "월 1회 전시 또는 주민 참여형 디자인 프로그램 운영이 필요합니다.",
    programExample: "동네 포스터 만들기 클래스, 사진 전시, 브랜드 기획 워크숍"
  },
  {
    id: 5,
    name: "고산권 팝업 스튜디오",
    area: "고산권",
    address: "대구 수성구 신매동·고산권 일대",
    lat: 35.8409,
    lng: 128.7059,
    type: "빈 상가",
    size: "약 36㎡",
    floor: "1층",
    remainingUnits: 1,
    totalUnits: 3,
    status: "신청 가능",
    monthlyCost: "조건부 감면",
    recommendedFor: ["팝업", "체험 전시", "교육 프로그램"],
    shortDescription:
      "유동 인구가 있는 생활권 상가로, 주민 체험 부스와 팝업 프로그램을 운영하기 좋은 공간입니다.",
    facility: "입구 전면 노출, 팝업 부스 설치 가능, 간단한 전시 가능",
    condition: "월 1회 주민 대상 체험 프로그램 운영과 공간 정리 기록 제출이 필요합니다.",
    programExample: "로컬 브랜드 팝업, 앱 체험 부스, 가족 참여형 만들기 클래스"
  }
];
