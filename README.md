# Culture Co-living Platform
> 2026 WCIF HYPECRAFT Culture Hackathon Track B  
> 빈 공간을 청년 창작자와 지역 주민이 함께 쓰는 문화 기반 코리빙 플랫폼

## 1. 프로젝트 개요

Culture Co-living Platform은 대구 수성구의 유휴 공간 또는 노후 공간을 청년 창작자, 예술가, 초기 스타트업 팀의 주거 및 작업 공간으로 연결하는 플랫폼 기반 문화 공유경제 모델을 제안합니다.

이 프로젝트는 단순한 공간 리모델링이 아니라, 청년 창작자가 낮은 임대료로 거주 및 작업 공간을 이용하는 대신 지역 주민을 위한 문화 프로그램을 제공하는 구조를 중심으로 합니다. 이를 통해 공간 소유자는 유휴 자산의 지속 가능한 활용 방안을 얻고, 지역 주민은 생활권 안에서 문화 경험과 세대 간 교류 기회를 얻을 수 있습니다.

현재 본 저장소는 초기 기획 단계이며, 서비스 세부 내용과 기술 구현 방식은 해커톤 진행 과정에서 변경될 수 있습니다.

## 2. 해커톤 배경

- 행사명: 2026 WCIF HYPECRAFT Culture Hackathon
- 주제: 문화 기반 지역 개발 및 수성구 내 저활용·노후 공간 활성화
- 지역 맥락: 대구 수성구, 특히 지산·범물 등 외곽 생활권의 유휴 또는 노후 공간
- 형식: 청년 아이디어 경진 및 해커톤

## 3. 선택 Track

- 선택 트랙: Track B
- 주제: Creator Co-living
- 방향:
  - 청년 창작자 및 초기 스타트업 팀의 주거·작업 공간 진입 장벽 완화
  - 유휴·노후 공간을 코리빙 및 코워킹 공간으로 전환
  - 지역 주민 대상 문화 프로그램과 연계한 문화 공유경제 모델 설계

## 4. 문제 정의

1. 수성구 외곽 지역에는 노후화되었거나 충분히 활용되지 못하는 주거·상업 공간이 존재합니다.
2. 청년 창작자, 예술가, 초기 스타트업 팀은 높은 주거비와 작업 공간 비용으로 인해 안정적인 활동 기반을 마련하기 어렵습니다.
3. 지역 주민은 생활권 안에서 접근 가능한 문화 경험과 커뮤니티 활력을 더 많이 필요로 합니다.

## 5. 핵심 아이디어

본 프로젝트는 세 주체를 연결하는 3면 매칭 플랫폼을 구상합니다.

- Space Owner: 유휴 공간 또는 노후 공간을 등록합니다.
- Creator / Startup Resident: 저렴한 코리빙·코워킹 공간에 지원하고, 지역 주민을 위한 문화 프로그램을 제안합니다.
- Local Resident: 문화 클래스, 전시, 워크숍, 커뮤니티 프로그램 등에 참여합니다.

청년 창작자는 지역 문화 기여를 통해 임대료 부담을 낮추고, 지역 주민은 새로운 문화 경험을 얻으며, 공간 소유자와 지역 이해관계자는 저활용 공간의 지속 가능한 활용 모델을 확보할 수 있습니다.

## 6. 서비스 구조

```text
[Vacant / Aging Space]
        ↓
[Platform Matching]
        ↓
[Creator Co-living & Co-working]
        ↓
[Local Cultural Programs]
        ↓
[Rent Reduction + Community Revitalization]
```

## 7. 주요 기능

아래 기능은 향후 프로토타입에서 검토할 예정 기능입니다.

- 공간 등록 및 목록화
- 창작자·입주자 지원
- 문화 프로그램 생성
- 지역 주민 프로그램 참여
- 프로그램 참여 및 기여도 추적
- 임대료 감면 조건 관리
- 프로토타입 대시보드 또는 관리자 화면

## 8. 기술 스택

최종 기술 스택은 아직 결정되지 않았습니다.

| Area | Stack |
| --- | --- |
| Frontend | TBD |
| Backend | TBD |
| Database | TBD |
| Design / Prototype | TBD |
| Deployment | TBD |

## 9. 프로토타입

- Prototype URL: TBD
- Demo Video: TBD
- Screenshots: TBD
- GitHub Repository: TBD

## 10. 발표 자료

- 최종 발표 자료는 5장 이내로 구성할 예정입니다.
- 최종 발표 스피치는 3분 이내로 준비할 예정입니다.
- 심사위원은 최종 발표 전 발표 자료를 사전 검토할 수 있습니다.
- Final Presentation Materials: TBD

## 11. 향후 계획

- [ ] 서비스명 확정
- [ ] 사용자 페르소나 정의
- [ ] 핵심 사용자 흐름 설계
- [ ] 와이어프레임 제작
- [ ] 웹/앱 프로토타입 구현
- [ ] 5장 이내 최종 발표 자료 준비
- [ ] 3분 이내 피치 스크립트 준비

## 12. 팀 정보

| Role | Name | GitHub |
| --- | --- | --- |
| PM / Planner | TBD | TBD |
| Designer | TBD | TBD |
| Developer | TBD | TBD |

## 13. Repository Convention

### Git Strategy

- `main`: 출시(release)에 사용하는 브랜치입니다.
- `develop`: 개발된 기능을 최종적으로 합쳐서 확인하는 기본 개발 브랜치입니다.
- `feature`: 기능 개발, 버그 수정, 문서 수정 등 태그가 붙는 작업 브랜치입니다.

개인 브랜치에서 작업을 마치면 개인 브랜치에서 `develop` 브랜치를 머지한 후, `develop` 브랜치로 Pull Request를 요청합니다.

### Tag Convention

- `init`: 가장 처음 Initial Commit에 사용합니다.
- `feat`: 새로운 기능 구현 시 사용합니다.
- `fix`: 버그나 오류 해결 시 사용합니다.
- `docs`: README, 템플릿 등 프로젝트 내 문서 수정 시 사용합니다.
- `setting`: 프로젝트 관련 설정 변경 시 사용합니다.
- `add`: 사진 등 에셋이나 라이브러리 추가 시 사용합니다.
- `refactor`: 기존 코드를 리팩토링하거나 수정할 시 사용합니다.
- `chore`: 중요도가 낮은 수정에 사용합니다.

### Commit Convention

- 태그는 반드시 소문자로 작성합니다.
- 내용은 한글로 작성합니다.
- 제목은 50자를 넘지 않도록 간단하게 명령조로 작성합니다.
- 설명이 필요한 경우 description에 작성합니다.
- 예시: `[docs] readme 추가`

### Branch Convention

```text
태그/#이슈번호-작업하는파일
```

예시:

```text
feat/#1-loginUI
```

> This repository is currently in the initial planning stage. Details may change as the hackathon idea is refined.
