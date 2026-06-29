import { PlaceholderImage } from "../common/PlaceholderImage";
import type { ArchivePost } from "../../data/archivePosts";

type ArchiveCardProps = {
  post: ArchivePost;
  onOpen: (post: ArchivePost) => void;
};

export function ArchiveCard({ post, onOpen }: ArchiveCardProps) {
  return (
    <article className="archive-board-card">
      <PlaceholderImage label={post.category} variant="archive" />
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
        <button className="button button-secondary archive-open-button" onClick={() => onOpen(post)} type="button">
          기록 보기
        </button>
      </div>
    </article>
  );
}
