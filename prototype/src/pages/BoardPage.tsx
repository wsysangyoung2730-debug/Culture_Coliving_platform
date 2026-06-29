import { useState } from "react";
import { ArchiveCard } from "../components/board/ArchiveCard";
import { ArchiveDetailModal } from "../components/board/ArchiveDetailModal";
import { SectionLabel } from "../components/common/SectionLabel";
import { archivePosts } from "../data/archivePosts";
import type { ArchivePost } from "../data/archivePosts";

const categoryChips = ["공연", "클래스", "전시", "세미나", "체험 부스"];

type CommentState = Record<number, string[]>;

const initialComments = archivePosts.reduce<CommentState>((accumulator, post) => {
  accumulator[post.id] = post.comments;
  return accumulator;
}, {});

export function BoardPage() {
  const [selectedPost, setSelectedPost] = useState<ArchivePost | null>(null);
  const [commentsByPost, setCommentsByPost] = useState<CommentState>(initialComments);

  const handleAddComment = (postId: number, comment: string) => {
    setCommentsByPost((current) => ({
      ...current,
      [postId]: [...(current[postId] ?? []), comment]
    }));
  };

  return (
    <div className="page-stack">
      <section className="page-intro">
        <SectionLabel>지난 프로그램 기록</SectionLabel>
        <h1>게시판</h1>
        <p>
          지난 프로그램의 기록과 주민 후기를 확인할 수 있습니다.
        </p>
        <p>
          동네의 빈 공간에서 열린 공연, 클래스, 세미나, 체험 프로그램의 흔적을
          모아 지역 문화 활동이 어떻게 이어지고 있는지 보여줍니다.
        </p>
        <div className="policy-chip-list" aria-label="아카이브 유형">
          {categoryChips.map((chip) => (
            <span className="policy-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <SectionLabel>아카이브</SectionLabel>
          <h2>공간에 남은 문화 활동 기록</h2>
          <p>주민 후기와 댓글을 통해 프로그램의 흔적을 이어갑니다.</p>
        </div>
        <div className="archive-grid">
          {archivePosts.map((post) => (
            <ArchiveCard key={post.id} onOpen={setSelectedPost} post={post} />
          ))}
        </div>
      </section>

      <ArchiveDetailModal
        comments={selectedPost ? commentsByPost[selectedPost.id] ?? [] : []}
        key={selectedPost?.id ?? "closed"}
        onAddComment={handleAddComment}
        onClose={() => setSelectedPost(null)}
        post={selectedPost}
      />
    </div>
  );
}
