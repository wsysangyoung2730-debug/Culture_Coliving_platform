import { useState } from "react";
import type { FormEvent } from "react";

type CommentFormProps = {
  onSubmitComment: (comment: string) => void;
};

export function CommentForm({ onSubmitComment }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | "">("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!comment.trim()) {
      setMessage("댓글 내용을 입력해주세요.");
      setMessageType("error");
      return;
    }

    onSubmitComment(comment.trim());
    setComment("");
    setMessage("댓글이 등록되었습니다.");
    setMessageType("success");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label>
        댓글 작성
        <textarea
          onChange={(event) => setComment(event.target.value)}
          placeholder="이 프로그램에 대한 의견을 남겨주세요."
          value={comment}
        />
      </label>
      {message && (
        <p className={messageType === "error" ? "form-error" : "form-success"}>
          {message}
        </p>
      )}
      <button className="button button-primary" type="submit">
        댓글 남기기
      </button>
    </form>
  );
}
