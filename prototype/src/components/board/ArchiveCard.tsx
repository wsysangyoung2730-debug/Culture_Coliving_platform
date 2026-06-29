import type { ArchivePost } from "../../data/archivePosts";

type ArchiveCardProps = {
  post: ArchivePost;
  onOpen: (post: ArchivePost) => void;
};

export function ArchiveCard({ post, onOpen }: ArchiveCardProps) {
  return (
    <button
      aria-label={`${post.title} 기록 보기`}
      className="archive-board-card"
      onClick={() => onOpen(post)}
      type="button"
    >
      <img className="archive-card-image" src={post.thumbnailImage} alt={post.thumbnailAlt} />
      <div className="archive-card-body">
        <div className="card-topline">
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.review}</p>
        <dl className="meta-list">
          <div>
            <dt>지역</dt>
            <dd>{post.area}</dd>
          </div>
          <div>
            <dt>장소</dt>
            <dd>{post.spaceName}</dd>
          </div>
        </dl>
      </div>
    </button>
  );
}
