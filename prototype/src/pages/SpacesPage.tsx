import { PlaceholderImage } from "../components/common/PlaceholderImage";
import { SectionLabel } from "../components/common/SectionLabel";
import { spaces } from "../data/spaces";

export function SpacesPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>창작 거점 탐색</SectionLabel>
        <h1>공간 찾기</h1>
        <p>
          청년 창작자와 스타트업이 조건부 저비용으로 사용할 수 있는 수성구
          생활권 빈 상가를 살펴봅니다.
        </p>
      </section>

      <section className="map-placeholder" aria-label="지도 영역">
        <span>지도 API 연결 예정</span>
        <p>건물별 잔여 공간 수와 마감 상태가 표시됩니다.</p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>공간 미리보기</SectionLabel>
          <h2>조건부 사용 가능 공간</h2>
        </div>
        <div className="card-grid">
          {spaces.map((space) => (
            <article className="data-card" key={space.id}>
              <PlaceholderImage label={space.area} variant="space" />
              <div className="card-body">
                <div className="card-topline">
                  <span>{space.area}</span>
                  <span className={space.status === "마감" ? "badge badge-muted" : "badge"}>
                    {space.status}
                  </span>
                </div>
                <h3>{space.name}</h3>
                <p>{space.shortDescription}</p>
                <dl className="meta-list">
                  <div>
                    <dt>유형</dt>
                    <dd>{space.type}</dd>
                  </div>
                  <div>
                    <dt>규모</dt>
                    <dd>
                      {space.size} · {space.floor}
                    </dd>
                  </div>
                  <div>
                    <dt>잔여</dt>
                    <dd>
                      {space.remainingUnits}/{space.totalUnits}
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
