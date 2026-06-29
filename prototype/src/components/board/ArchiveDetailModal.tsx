import { useEffect } from "react";
import { PlaceholderImage } from "../common/PlaceholderImage";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import type { ArchiveComment, ArchivePost } from "../../data/archivePosts";

type ArchiveDetailModalProps = {
  post: ArchivePost | null;
  comments: ArchiveComment[];
  onAddComment: (postId: number, comment: string) => void;
  onClose: () => void;
};

export function ArchiveDetailModal({
  post,
  comments,
  onAddComment,
  onClose
}: ArchiveDetailModalProps) {
  useEffect(() => {
    if (!post) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, post]);

  if (!post) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <div
        aria-labelledby="archive-detail-title"
        aria-modal="true"
        className="application-modal archive-detail-modal"
        role="dialog"
      >
        <div className="modal-heading">
          <div>
            <span className="section-label">아카이브 상세</span>
            <h2 id="archive-detail-title">{post.title}</h2>
            <p>
              {post.area} · {post.spaceName} · {post.date}
            </p>
          </div>
          <button className="modal-close" onClick={onClose} type="button">
            닫기
          </button>
        </div>

        <div className="archive-detail-layout">
          <div className="archive-detail-media">
            <PlaceholderImage label={post.thumbnailPrompt} variant="archive" />
          </div>

          <div className="archive-detail-content">
            <dl className="detail-list">
              <div>
                <dt>행사 유형</dt>
                <dd>{post.category}</dd>
              </div>
              <div>
                <dt>지역</dt>
                <dd>{post.area}</dd>
              </div>
              <div>
                <dt>진행 장소</dt>
                <dd>{post.spaceName}</dd>
              </div>
              <div>
                <dt>진행 날짜</dt>
                <dd>{post.date}</dd>
              </div>
              <div>
                <dt>주민 후기</dt>
                <dd>{post.review}</dd>
              </div>
            </dl>

            <section className="comment-section" aria-labelledby="comments-title">
              <h3 id="comments-title">댓글</h3>
              <CommentList comments={comments} />
              <CommentForm onSubmitComment={(comment) => onAddComment(post.id, comment)} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
