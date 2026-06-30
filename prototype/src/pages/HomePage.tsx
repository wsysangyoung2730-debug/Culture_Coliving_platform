import type { CSSProperties } from "react";
import { RevealOnScroll } from "../components/common/RevealOnScroll";
import { SectionLabel } from "../components/common/SectionLabel";
import { HomeSectionNav } from "../components/home/HomeSectionNav";
import { PilotScheduleTable } from "../components/home/PilotScheduleTable";
import culturekeeperSymbol from "../assets/logos/culturekeeper-symbol.svg";

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

const circulationFlowSteps = [
  "주민 참여",
  "프로그램 참가비",
  "공간 유지·관리",
  "다음 문화 프로그램",
  "주민 재참여"
];

const circulationMetrics = [
  { label: "월 수입", value: "94만 원" },
  { label: "월 비용", value: "49.4만 원" },
  { label: "월 잉여", value: "44.6만 원" },
  { label: "손익분기", value: "8~9명", helper: "회당 참여자" }
];

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
  "재방문율",
  "창작자 잔존율",
  "손익분기 달성 여부"
];

export function HomePage() {
  const handleScrollToSolution = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.getElementById("solution-structure")?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <div className="page-stack home-page">
      <HomeSectionNav />
      <section className="hero-section home-hero home-section-anchor" id="hero">
        <div className="hero-copy">
          <span className="hero-brand-label">
            <img src={culturekeeperSymbol} alt="" aria-hidden="true" />
            <span>Culture Co-living Platform</span>
          </span>
          <h1>
            컬처키퍼
          </h1>
          <div className="hero-main-message">
            청년의 창작으로 빈 공간을 <span>돌보고</span>,
            <br />
            주민의 일상에 문화를 <span>더합니다</span>.
          </div>
          <p>
            빈 공간은 청년의 창작 거점이 되고,
            <br />
            주민의 일상은 문화와 가까워집니다.
          </p>
          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={handleScrollToSolution}
              type="button"
            >
              서비스 구조 보기
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <aside className="hero-visual" aria-label="공간에 빛이 들어오는 추상 이미지">
          <span className="visual-door" />
          <span className="visual-light" />
          <span className="visual-shadow" />
        </aside>
      </section>

      <section
        aria-labelledby="problem-title"
        className="content-section landing-section home-section-anchor"
        id="problem"
      >
        <RevealOnScroll className="section-heading" variant="slide-left">
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
        </RevealOnScroll>
        <div className="problem-grid">
          {problemCards.map((problem, index) => (
            <RevealOnScroll
              as="article"
              className="problem-card"
              delay={index * 120}
              key={problem.title}
            >
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll as="p" className="local-context" delay={360}>
          수성구 생활권 예시: 지산동, 범물동, 파동, 만촌동, 신매동, 시지동 일대
        </RevealOnScroll>
      </section>

      <section
        aria-labelledby="solution-title"
        className="content-section landing-section home-section-anchor"
        id="solution-structure"
      >
        <RevealOnScroll className="section-heading">
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
        </RevealOnScroll>

        <div className="solution-steps">
          {solutionSteps.map((step, index) => (
            <RevealOnScroll
              as="article"
              className="solution-step"
              delay={index * 140}
              key={step.number}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll as="p" className="model-statement" delay={420}>
          공간 사용권과 문화 기여를 교환해,
          <br />
          빈 공간과 주민의 일상을 함께 살리는 구조입니다.
        </RevealOnScroll>
      </section>

      <section
        aria-labelledby="circulation-title"
        className="content-section landing-section home-section-anchor"
        id="circulation"
      >
        <RevealOnScroll className="section-heading">
          <SectionLabel>순환 모델</SectionLabel>
          <h2 id="circulation-title">참가비가 다시 공간을 살립니다</h2>
        </RevealOnScroll>

        <RevealOnScroll
          ariaLabel="참가비 기반 공간 순환 모델"
          className="circulation-model-layout"
          delay={120}
        >
          <div className="circulation-flow-panel">
            <span className="circulation-panel-kicker">Flow</span>
            <div className="circulation-step-list">
              {circulationFlowSteps.map((step, index) => (
                <div
                  className={`circulation-step-card ${
                    index === circulationFlowSteps.length - 1 ? "is-highlighted" : ""
                  }`}
                  key={step}
                  style={{ "--step-delay": `${index * 90}ms` } as CSSProperties}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="circulation-metric-grid">
            {circulationMetrics.map((metric, index) => (
              <article
                className="circulation-metric-card"
                key={metric.label}
                style={{ "--metric-delay": `${index * 90 + 120}ms` } as CSSProperties}
              >
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                {metric.helper && <small>{metric.helper}</small>}
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="circulation-calculation-box" delay={360}>
          <div>
            <p>
              프로그램 참가비: (주민 10명 × 1만 원 + 외부 5명 × 1.5만 원) × 월 4회 =
              <strong> 70만 원</strong>
            </p>
            <p>
              유휴 시간 대관: 월 8회 × 3만 원 =<strong> 24만 원</strong>
            </p>
            <p>
              월 수입 합계: 70만 원 + 24만 원 =<strong> 94만 원</strong>
            </p>
          </div>
          <small>※ 위 수치는 시범운영으로 검증할 가정값입니다.</small>
        </RevealOnScroll>
      </section>

      <section
        aria-labelledby="pilot-title"
        className="content-section landing-section home-section-anchor"
        id="pilot"
      >
        <RevealOnScroll className="section-heading">
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
        </RevealOnScroll>

        <div className="metric-grid">
          {pilotMetrics.map((metric, index) => (
            <RevealOnScroll
              as="article"
              className="metric-card"
              delay={index * 90}
              key={metric.label}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={160}>
          <PilotScheduleTable />
        </RevealOnScroll>

        <RevealOnScroll className="evaluation-panel" delay={220}>
          <h3>확인할 지표</h3>
          <ul>
            {evaluationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>
    </div>
  );
}
