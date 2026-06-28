import { Link } from "react-router-dom";
import { SectionLabel } from "../components/common/SectionLabel";

const problemCards = [
  {
    title: "방치되는 빈 상가",
    body:
      "사람의 발길이 줄어든 빈 상가는 시간이 지날수록 관리되지 않는 공간으로 남습니다. 문을 닫은 가게는 단순한 공실이 아니라, 동네의 활력이 빠져나간 흔적이 됩니다."
  },
  {
    title: "공간이 필요한 청년 창작자",
    body:
      "청년 예술가, 창작자, 초기 스타트업 팀은 활동을 시작하고 실험할 공간이 필요합니다. 하지만 높은 임대료와 초기 비용은 독립적인 창작 거점을 마련하는 데 큰 부담이 됩니다."
  },
  {
    title: "생활권 문화 접근성 부족",
    body:
      "주민들은 공연, 클래스, 세미나, 체험 프로그램을 원하지만 일상 가까이에서 정기적으로 문화를 만날 기회는 충분하지 않습니다."
  }
];

const solutionSteps = [
  {
    number: "01",
    title: "빈 상가",
    body: "활용되지 못한 지역 공간을 청년 창작자의 활동 거점으로 전환합니다."
  },
  {
    number: "02",
    title: "청년 문화관리인",
    body:
      "청년 창작자는 공간을 사용하며 기본 시설을 관리하고, 월 1회 주민 대상 프로그램을 운영합니다."
  },
  {
    number: "03",
    title: "주민 문화 프로그램",
    body: "주민은 가까운 동네에서 공연, 클래스, 세미나, 체험 부스를 경험합니다."
  }
];

const policyChips = [
  "지역 주민: 할인가",
  "외부 방문객: 정가",
  "정기 참여자: 월간권 가능"
];

const circulationSteps = ["주민 참여", "프로그램 참가비", "공간 유지", "다음 문화 프로그램"];

const pilotMetrics = [
  { value: "3곳", label: "시범 공간" },
  { value: "6팀", label: "청년 창작자" },
  { value: "6개월", label: "운영 기간" },
  { value: "월 1회", label: "프로그램" }
];

const evaluationItems = [
  "프로그램 운영 횟수",
  "참여자 수",
  "주민 후기",
  "공간 관리 상태",
  "재방문율"
];

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-section home-hero">
        <div className="hero-copy">
          <SectionLabel>문화 접근성 향상</SectionLabel>
          <h1>
            <span className="accent-text">빈 공간</span>은{" "}
            <span className="accent-text">청년의 창작 거점</span>이 되고,
            <br />
            주민의 일상은{" "}
            <span className="accent-text">문화와 가까워집니다</span>.
          </h1>
          <p>
            청년 창작자가 빈 상가를 조건부 저비용으로 사용하고,
            <br />
            월 1회 문화 프로그램을 운영해 주민들의{" "}
            <span className="inline-accent">문화 접근성</span>을 높이는
            <br />
            지역 순환형 공간 플랫폼입니다.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/spaces">
              공간 찾기
            </Link>
            <Link className="button button-secondary" to="/programs">
              프로그램 보기
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="서비스 구조 요약">
          <span className="hero-panel-kicker">Core Model</span>
          <div className="hero-panel-row">
            <strong>빈 상가</strong>
            <span>조건부 저비용 공간</span>
          </div>
          <div className="hero-panel-row">
            <strong>청년 창작자</strong>
            <span>관리 + 월 1회 프로그램</span>
          </div>
          <div className="hero-panel-row">
            <strong>지역 주민</strong>
            <span>생활권 문화 참여</span>
          </div>
        </aside>
      </section>

      <section className="content-section landing-section" aria-labelledby="problem-title">
        <div className="section-heading">
          <SectionLabel>문제 정의</SectionLabel>
          <h2 id="problem-title">
            동네의 빈 공간은 늘어나고,
            <br />
            문화는 여전히 멀리 있습니다.
          </h2>
          <p>
            수성구 외곽 생활권의 빈 상가는 관리되지 않는 공간으로 남고,
            청년 창작자와 주민은 각자의 필요를 해결할 접점이 부족합니다.
          </p>
        </div>
        <div className="problem-grid">
          {problemCards.map((problem) => (
            <article className="problem-card" key={problem.title}>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
        <p className="local-context">
          수성구 외곽 생활권 예시: 지산동, 범물동, 파동, 만촌동, 고산권 일대
        </p>
      </section>

      <section className="content-section landing-section" aria-labelledby="solution-title">
        <div className="section-heading">
          <SectionLabel>해결 구조</SectionLabel>
          <h2 id="solution-title">
            공간을 쓰는 청년이,
            <br />
            동네의 문화를 만드는 사람이 됩니다.
          </h2>
          <p>
            청년 창작자는 빈 상가를 조건부 저비용으로 사용하고, 기본 시설
            관리와 월 1회 문화 프로그램 운영을 통해 지역 주민과 연결됩니다.
          </p>
        </div>

        <div className="solution-steps">
          {solutionSteps.map((step) => (
            <article className="solution-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>

        <p className="model-statement">
          공간 사용권과 문화 기여를 교환해,
          <br />
          빈 공간과 주민의 일상을 함께 살리는 구조입니다.
        </p>
      </section>

      <section className="content-section landing-section" aria-labelledby="circulation-title">
        <div className="section-heading">
          <SectionLabel>순환 모델</SectionLabel>
          <h2 id="circulation-title">
            프로그램 참가비는 다시 공간과 프로그램으로 돌아갑니다.
          </h2>
          <p>
            지역 주민은 할인된 가격으로 프로그램에 참여하고, 외부 방문객은
            정가로 참여합니다. 참가비는 공간 유지, 프로그램 운영, 창작자
            활동을 위한 비용으로 다시 순환됩니다.
          </p>
        </div>

        <div className="policy-chip-list" aria-label="참여 가격 정책">
          {policyChips.map((chip) => (
            <span className="policy-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <div className="circulation-flow" aria-label="지역 순환 흐름">
          {circulationSteps.map((step, index) => (
            <div className="flow-item" key={step}>
              <span>{step}</span>
              {index < circulationSteps.length - 1 && (
                <span className="flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section landing-section" aria-labelledby="pilot-title">
        <div className="section-heading">
          <SectionLabel>시범 운영</SectionLabel>
          <h2 id="pilot-title">
            6개월 동안 작게 시작하고,
            <br />
            기록으로 확장 가능성을 확인합니다.
          </h2>
          <p>
            6개월 동안 3개의 빈 상가를 시범 공간으로 운영합니다. 각 공간에는
            2팀씩, 총 6개의 청년 창작자 팀이 입주합니다. 성과는 프로그램 운영
            횟수, 참여자 수, 주민 후기, 공간 관리 상태, 재방문율을 기준으로
            확인합니다.
          </p>
        </div>

        <div className="metric-grid">
          {pilotMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>

        <div className="evaluation-panel">
          <h3>확인할 지표</h3>
          <ul>
            {evaluationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
