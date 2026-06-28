import { PlaceholderImage } from "../components/common/PlaceholderImage";
import { SectionLabel } from "../components/common/SectionLabel";
import { archivePosts } from "../data/archivePosts";

export function BoardPage() {
  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>지난 프로그램 기록</SectionLabel>
        <h1>게시판</h1>
        <p>
          문화관리인이 운영한 프로그램의 후기와 동네 문화 활동 기록을 모아
          살펴봅니다.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>아카이브</SectionLabel>
          <h2>공간에 남은 문화 활동</h2>
        </div>
        <div className="card-grid">
          {archivePosts.map((post) => (
            <article className="data-card archive-card" key={post.id}>
              <PlaceholderImage label={post.category} variant="archive" />
              <div className="card-body">
                <div className="card-topline">
                  <span>{post.area}</span>
                  <span>{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.review}</p>
                <dl className="meta-list">
                  <div>
                    <dt>공간</dt>
                    <dd>{post.spaceName}</dd>
                  </div>
                  <div>
                    <dt>분류</dt>
                    <dd>{post.category}</dd>
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
