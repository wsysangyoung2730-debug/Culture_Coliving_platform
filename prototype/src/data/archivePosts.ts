import beommulPostcardClassImage from "../assets/board/archive-beommul-postcard-class.png";
import jisanGuitarConcertImage from "../assets/board/archive-jisan-guitar-concert.png";
import manchonPhotoExhibitImage from "../assets/board/archive-manchon-photo-exhibit.png";
import padongHealthcareDayImage from "../assets/board/archive-padong-healthcare-day.png";
import sijiUpcyclingClassImage from "../assets/board/archive-siji-upcycling-class.png";
import sinmaeBrandSeminarImage from "../assets/board/archive-sinmae-brand-seminar.png";
import suseongFilmNightImage from "../assets/board/archive-suseong-film-night.png";

export type ArchiveComment = {
  id: number;
  authorId: string;
  content: string;
};

export type ArchivePost = {
  id: number;
  title: string;
  category: string;
  area: string;
  spaceName: string;
  date: string;
  thumbnailPrompt: string;
  thumbnailImage: string;
  thumbnailAlt: string;
  review: string;
  comments: ArchiveComment[];
};

export const archivePosts: ArchivePost[] = [
  {
    id: 1,
    title: "지산동 저녁 기타 공연",
    category: "공연",
    area: "지산동",
    spaceName: "지산 로컬상가 1층",
    date: "2026.06.12",
    thumbnailPrompt: "어두운 소형 상가 안에서 기타 공연을 듣는 주민들",
    thumbnailImage: jisanGuitarConcertImage,
    thumbnailAlt: "지산동 로컬상가에서 열린 저녁 기타 공연을 주민들이 감상하는 모습",
    review: "작은 공간이라 연주자와 관객의 거리가 가까웠고, 동네 안에서 공연을 본다는 점이 새로웠습니다.",
    comments: [
      {
        id: 101,
        authorId: "jisandong_23",
        content: "퇴근 후 들르기 좋았어요."
      },
      {
        id: 102,
        authorId: "localwalker",
        content: "다음 달 공연도 기대됩니다."
      }
    ]
  },
  {
    id: 2,
    title: "범물동 그림 엽서 클래스",
    category: "클래스",
    area: "범물동",
    spaceName: "범물 생활문화 점포",
    date: "2026.06.15",
    thumbnailPrompt: "테이블에 둘러앉아 그림 엽서를 만드는 주민들",
    thumbnailImage: beommulPostcardClassImage,
    thumbnailAlt: "범물동 생활문화 점포에서 주민들이 그림 엽서를 만드는 모습",
    review: "처음 만난 이웃과 함께 그림을 그리며 자연스럽게 이야기를 나눌 수 있었습니다.",
    comments: [
      {
        id: 201,
        authorId: "beommul_mom",
        content: "아이와 같이 참여하기 좋았어요."
      },
      {
        id: 202,
        authorId: "dailyculture",
        content: "재료가 잘 준비되어 있었습니다."
      }
    ]
  },
  {
    id: 3,
    title: "파동 헬스케어 체험 데이",
    category: "체험 부스",
    area: "파동",
    spaceName: "파동 커뮤니티 상가",
    date: "2026.06.20",
    thumbnailPrompt: "주민이 태블릿으로 헬스케어 앱을 체험하는 장면",
    thumbnailImage: padongHealthcareDayImage,
    thumbnailAlt: "파동 커뮤니티 상가에서 주민들이 태블릿으로 헬스케어 서비스를 체험하는 모습",
    review: "앱 사용법을 직접 배워볼 수 있어서 디지털 서비스에 대한 부담이 줄었습니다.",
    comments: [
      {
        id: 301,
        authorId: "neighborhood_lee",
        content: "설명이 친절했어요."
      },
      {
        id: 302,
        authorId: "localwalker",
        content: "시니어 대상 회차가 더 있으면 좋겠습니다."
      }
    ]
  },
  {
    id: 4,
    title: "만촌동 사진 산책 결과전",
    category: "전시",
    area: "만촌동",
    spaceName: "만촌 크리에이터 스팟",
    date: "2026.06.22",
    thumbnailPrompt: "동네 사진이 벽에 걸린 작은 결과 전시",
    thumbnailImage: manchonPhotoExhibitImage,
    thumbnailAlt: "만촌동 크리에이터 스팟에서 주민들이 동네 사진 결과전을 둘러보는 모습",
    review: "익숙한 골목을 다른 사람의 시선으로 보니 동네가 새롭게 느껴졌습니다.",
    comments: [
      {
        id: 401,
        authorId: "suseong_creator",
        content: "사진 설명이 인상적이었습니다."
      },
      {
        id: 402,
        authorId: "neighborhood_lee",
        content: "다음에는 산책부터 참여하고 싶어요."
      }
    ]
  },
  {
    id: 5,
    title: "신매동 로컬 브랜드 이야기",
    category: "세미나",
    area: "신매동",
    spaceName: "신매 팝업 스튜디오",
    date: "2026.06.27",
    thumbnailPrompt: "작은 세미나 공간에서 로컬 브랜드 강의를 듣는 주민들",
    thumbnailImage: sinmaeBrandSeminarImage,
    thumbnailAlt: "신매동 팝업 스튜디오에서 주민들이 로컬 브랜드 세미나를 듣는 모습",
    review: "동네에서 시작할 수 있는 작은 브랜드 사례를 들으며 창업 아이디어를 구체화할 수 있었습니다.",
    comments: [
      {
        id: 501,
        authorId: "gogosan_88",
        content: "자료가 실용적이었어요."
      },
      {
        id: 502,
        authorId: "suseong_creator",
        content: "후속 워크숍이 열리면 좋겠습니다."
      }
    ]
  },
  {
    id: 6,
    title: "주말 업사이클링 가족 클래스",
    category: "클래스",
    area: "시지동",
    spaceName: "시지 생활문화 스튜디오",
    date: "2026.06.29",
    thumbnailPrompt: "가족이 함께 재활용 재료로 작품을 만드는 장면",
    thumbnailImage: sijiUpcyclingClassImage,
    thumbnailAlt: "시지동 생활문화 스튜디오에서 가족이 재활용 재료로 작품을 만드는 모습",
    review: "아이와 함께 만들면서 환경 이야기도 나눌 수 있어 주말 프로그램으로 만족스러웠습니다.",
    comments: [
      {
        id: 601,
        authorId: "dailyculture",
        content: "가족 단위로 참여하기 편했습니다."
      },
      {
        id: 602,
        authorId: "beommul_mom",
        content: "완성품을 가져갈 수 있어 좋았어요."
      }
    ]
  },
  {
    id: 7,
    title: "수성동 로컬 필름 나이트",
    category: "전시",
    area: "수성동",
    spaceName: "수성 커뮤니티 라운지",
    date: "2026.07.01",
    thumbnailPrompt: "작은 상가 벽면에 동네 기록 영상을 상영하는 밤",
    thumbnailImage: suseongFilmNightImage,
    thumbnailAlt: "수성동 커뮤니티 라운지에서 주민들이 동네 기록 영상을 감상하는 모습",
    review: "동네의 오래된 사진과 짧은 영상을 함께 보며 이웃과 자연스럽게 추억을 나눌 수 있었습니다.",
    comments: [
      {
        id: 701,
        authorId: "suseong_creator",
        content: "영상으로 보니 익숙한 거리가 다르게 느껴졌어요."
      },
      {
        id: 702,
        authorId: "jisandong_23",
        content: "다른 동네 기록도 이어서 보고 싶습니다."
      }
    ]
  }
];
