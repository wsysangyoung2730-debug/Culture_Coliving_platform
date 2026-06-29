import type { ArchiveComment } from "../../data/archivePosts";

type CommentListProps = {
  comments: ArchiveComment[];
};

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="comment-empty">아직 댓글이 없습니다. 첫 의견을 남겨보세요.</p>;
  }

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.id}>
          <span>@{comment.authorId}</span>
          <p>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}
