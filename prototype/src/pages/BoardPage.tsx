import { useState } from "react";
import { ArchiveCard } from "../components/board/ArchiveCard";
import { ArchiveDetailModal } from "../components/board/ArchiveDetailModal";
import { SectionLabel } from "../components/common/SectionLabel";
import { archivePosts } from "../data/archivePosts";
import type { ArchiveComment, ArchivePost } from "../data/archivePosts";

const categoryChips = ["공연", "클래스", "전시", "세미나", "체험 부스"];
const postsPerPage = 6;

type CommentState = Record<number, ArchiveComment[]>;

const parseArchiveDate = (date: string) => {
  const [year, month, day] = date.split(".").map(Number);

  if (!year || !month || !day) {
    return 0;
  }

  return new Date(year, month - 1, day).getTime();
};

const sortedArchivePosts = [...archivePosts].sort(
  (firstPost, secondPost) =>
    parseArchiveDate(secondPost.date) - parseArchiveDate(firstPost.date)
);

const initialComments = archivePosts.reduce<CommentState>((accumulator, post) => {
  accumulator[post.id] = post.comments;
  return accumulator;
}, {});

export function BoardPage() {
  const [selectedPost, setSelectedPost] = useState<ArchivePost | null>(null);
  const [commentsByPost, setCommentsByPost] = useState<CommentState>(initialComments);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedArchivePosts.length / postsPerPage);
  const shouldShowPagination = sortedArchivePosts.length > postsPerPage;
  const visiblePosts = sortedArchivePosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleAddComment = (postId: number, comment: string) => {
    setCommentsByPost((current) => ({
      ...current,
      [postId]: [
        ...(current[postId] ?? []),
        {
          id: Date.now(),
          authorId: "local_guest",
          content: comment
        }
      ]
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
          <h2>동네 문화 기록</h2>
          <p>지난 프로그램의 사진, 후기, 댓글을 한곳에서 확인하세요.</p>
        </div>
        <div className="archive-grid">
          {visiblePosts.map((post) => (
            <ArchiveCard key={post.id} onOpen={setSelectedPost} post={post} />
          ))}
        </div>
        {shouldShowPagination && (
          <nav className="archive-pagination" aria-label="아카이브 페이지">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isCurrentPage = pageNumber === currentPage;

              return (
                <button
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={isCurrentPage ? "archive-page-active" : ""}
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  type="button"
                >
                  {pageNumber}
                </button>
              );
            })}
          </nav>
        )}
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
