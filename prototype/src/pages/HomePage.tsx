import { Link } from "react-router-dom";
import { PlaceholderImage } from "../components/common/PlaceholderImage";
import { SectionLabel } from "../components/common/SectionLabel";

const previewBlocks = [
  {
    title: "빈 상가",
    text: "방치된 상가를 청년 창작자의 활동 거점으로 전환합니다.",
    label: "Vacant Space"
  },
  {
    title: "청년 문화관리인",
    text: "공간을 사용하며 기본 관리와 월간 문화 프로그램을 수행합니다.",
    label: "Culture Keeper"
  },
  {
    title: "주민 문화 프로그램",
    text: "공연, 클래스, 세미나, 체험 부스를 생활권 가까이에서 만납니다.",
    label: "Local Program"
  }
];

export function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-section">
        <SectionLabel>공간-문화 순환형 플랫폼</SectionLabel>
        <h1>
          빈 공간은 청년의 창작 거점이 되고,
          <br />
          주민의 일상은 문화와 가까워집니다.
        </h1>
        <p>
          청년 창작자가 빈 상가를 조건부 저비용으로 사용하고,
          <br />
          월 1회 문화 프로그램을 운영해 주민들의 문화 접근성을 높이는
          <br />
          지역 순환형 공간 플랫폼입니다.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/spaces">
            공간 둘러보기
          </Link>
          <Link className="button button-secondary" to="/programs">
            프로그램 보기
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>핵심 구조</SectionLabel>
          <h2>세 주체가 만드는 지역 순환</h2>
        </div>
        <div className="preview-grid">
          {previewBlocks.map((block) => (
            <article className="feature-card" key={block.title}>
              <PlaceholderImage label={block.label} variant="space" />
              <div>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
