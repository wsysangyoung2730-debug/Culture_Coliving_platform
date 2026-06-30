# Culture Co-living Platform : 컬처키퍼

> 2026 WCIF HYPECRAFT Culture Hackathon Track B  
> 빈 공간을 청년 창작자의 활동 거점으로 열고, 주민의 일상에 문화 프로그램을 연결하는 웹 프로토타입

<img width="1395" height="811" alt="1  메인화면" src="https://github.com/user-attachments/assets/60f9be50-5454-49e2-a11e-5c80546796de" />






## 해커톤 개요

컬처키퍼는 대구 수성구의 유휴 공간을 청년 창작자와 지역 주민이 함께 쓰는 문화 거점으로 전환하는 아이디어에서 출발했습니다.

청년 창작자는 공간을 사용하며 문화 프로그램을 운영하고, 주민은 가까운 생활권에서 클래스, 세미나, 전시, 공연을 경험할 수 있습니다.





## 이 서비스에서 할 수 있는 것

### 1. 동네의 빈 공간 찾기

지도와 공간 카드에서 지역별 유휴 공간, 잔여 공간 수, 신청 가능 상태를 확인할 수 있습니다.

| 지도에서 공간찾기 | 공간 비교하기 | 공간 대여하기 | 공간 신청완료
| --- | --- | --- | --- |
| <img width="1395" height="811" alt="2 1 공간찾기_지도" src="https://github.com/user-attachments/assets/f29fb64e-2c60-4003-8de1-63c879381b5c" /> | <img width="1395" height="811" alt="2 2 공간찾기_비교" src="https://github.com/user-attachments/assets/9df4ef00-df4d-4afa-a65b-45890a04301f" /> | <img width="1395" height="811" alt="2 3 공간찾기_대여" src="https://github.com/user-attachments/assets/b9508c07-8cea-4cec-89cd-9e5b4776eb08" /> | <img width="1395" height="811" alt="2 4 공간찾기_신청 완료" src="https://github.com/user-attachments/assets/a33a70fb-5824-448f-8ace-1fefb9745525" />|

### 2. 문화 프로그램 둘러보기

동네에서 열리는 클래스, 체험 부스, 세미나, 공연을 확인하고 프로그램별 장소, 일정, 주민가를 볼 수 있습니다.

| 프로그램 미리보기 | 우리 동네 프로그램 둘러보기 |
| --- | --- |
| <img width="1395" height="811" alt="3 1 프로그램_미리보기" src="https://github.com/user-attachments/assets/b113aa11-f751-4074-bca1-7c205d22c79a" />| <img width="1395" height="811" alt="3 2 프로그램_문화 프로그램" src="https://github.com/user-attachments/assets/a091ba28-4ad6-4282-9939-9310c9d60d1d" /> |

### 3. 프로그램 신청하기

원하는 프로그램을 선택해 신청 흐름을 확인할 수 있습니다. 현재는 해커톤 프로토타입용 화면 흐름으로 구현되어 있습니다.

| 프로그램 신청하기 | 프로그램 신청완료 |
| --- | --- |
| <img width="1395" height="811" alt="3 3 프로그램_프로그램 신청" src="https://github.com/user-attachments/assets/17811254-6a22-46c3-bf7b-966ce4ee3049" /> | <img width="1395" height="811" alt="3 4  프로그램_신청 완료" src="https://github.com/user-attachments/assets/969c56f1-b3c2-49c4-8c06-9cbb83c2ead7" />|

### 4. 지난 문화 기록 보기

진행된 프로그램의 사진, 주민 후기, 댓글을 통해 동네 문화 활동의 기록을 확인할 수 있습니다.

| 문화 기록 | 문화기록 상세보기 |
| --- | --- |
| <img width="1395" height="811" alt="4 1 게시판_문화 기록" src="https://github.com/user-attachments/assets/4e116edf-5493-499e-9c0f-343a13bd47bd" /> | <img width="1395" height="811" alt="4 2 게시판_문화 기록 - 상세" src="https://github.com/user-attachments/assets/5aaccb31-2dfa-408c-9f64-eef3b20d90d1" /> |

## 핵심 흐름

```text
유휴 공간 발견
→ 청년 창작자 입주 및 운영
→ 주민 문화 프로그램 진행
→ 참가비로 공간 유지
→ 다음 프로그램으로 재순환
```

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| Frontend | React, TypeScript |
| Build | Vite |
| Styling | CSS |
| Map | Kakao Maps JavaScript API |
| Deploy | Vercel |

## 실행 방법

```bash
cd prototype
npm install
npm run dev
```

Kakao Map을 실제로 표시하려면 `.env`에 아래 값을 설정해야 합니다.

```env
VITE_KAKAO_MAP_APP_KEY=your_kakao_map_app_key_here
```

## 현재 상태

- 홈: 서비스 소개와 순환 모델
- 공간 찾기: 지도 기반 공간 탐색
- 프로그램: 문화 프로그램 목록 및 신청 흐름
- 게시판: 지난 프로그램 사진, 후기, 댓글 기록

본 저장소는 해커톤 발표와 시연을 위한 웹 프로토타입입니다.
