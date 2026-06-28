import { PlaceholderImage } from "../components/common/PlaceholderImage";
import { SectionLabel } from "../components/common/SectionLabel";
import { programs } from "../data/programs";

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function ProgramsPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>주민 문화 접근</SectionLabel>
        <h1>프로그램</h1>
        <p>
          가까운 동네 공간에서 열리는 공연, 클래스, 세미나, 체험 부스를
          주민 할인가로 탐색합니다.
        </p>
      </section>

      <section className="poster-placeholder" aria-label="포스터 슬라이드 영역">
        <span>포스터 슬라이드 구현 예정</span>
        <p>6개의 프로그램 포스터가 오른쪽에서 왼쪽으로 흐릅니다.</p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>프로그램 미리보기</SectionLabel>
          <h2>이번 달 지역 프로그램</h2>
        </div>
        <div className="card-grid">
          {programs.map((program) => (
            <article className="data-card" key={program.id}>
              <PlaceholderImage label={program.posterText} variant="program" />
              <div className="card-body">
                <div className="card-topline">
                  <span>{program.category}</span>
                  <span>{program.area}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.shortDescription}</p>
                <dl className="meta-list">
                  <div>
                    <dt>공간</dt>
                    <dd>{program.spaceName}</dd>
                  </div>
                  <div>
                    <dt>일시</dt>
                    <dd>
                      {program.date} · {program.time}
                    </dd>
                  </div>
                  <div>
                    <dt>가격</dt>
                    <dd>
                      {priceFormatter.format(program.originalPrice)}원 / 주민{" "}
                      {priceFormatter.format(program.residentPrice)}원
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
