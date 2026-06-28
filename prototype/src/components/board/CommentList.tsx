type CommentListProps = {
  comments: string[];
};

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="comment-empty">아직 댓글이 없습니다. 첫 의견을 남겨보세요.</p>;
  }

  return (
    <ul className="comment-list">
      {comments.map((comment, index) => (
        <li key={`${comment}-${index}`}>
          <span>주민 의견</span>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
  );
}
