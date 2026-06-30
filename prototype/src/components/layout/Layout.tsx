import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

type FooterModalKey = "terms" | "privacy" | "contact";

const footerModalContent: Record<FooterModalKey, { title: string; body: string }> = {
  terms: {
    title: "이용약관",
    body:
      "컬처키퍼는 지역의 유휴 공간과 청년 창작 활동을 연결하기 위한 시범 서비스입니다. 현재 화면의 정보는 프로토타입용 예시이며, 실제 이용 조건은 공간별 협약과 운영 정책에 따라 달라질 수 있습니다."
  },
  privacy: {
    title: "개인정보처리방침",
    body:
      "현재 프로토타입에서는 실제 개인정보를 저장하지 않습니다. 신청 폼에 입력된 정보는 화면 흐름을 확인하기 위한 예시이며, 새로고침 시 유지되지 않습니다."
  },
  contact: {
    title: "문의하기",
    body:
      "컬처키퍼 시범 운영 및 공간 제휴 문의는 운영 담당자에게 전달되는 흐름을 가정한 프로토타입입니다. 실제 문의 채널은 추후 운영 정책에 따라 연결될 예정입니다."
  }
};

export function Layout({ children }: LayoutProps) {
  const [activeFooterModal, setActiveFooterModal] = useState<FooterModalKey | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const footerModal = activeFooterModal ? footerModalContent[activeFooterModal] : null;

  useEffect(() => {
    if (!activeFooterModal) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveFooterModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFooterModal]);

  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell">{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>CULTURE KEEPER</span>
          <nav aria-label="푸터 메뉴">
            <button onClick={() => setActiveFooterModal("terms")} type="button">
              이용약관
            </button>
            <button onClick={() => setActiveFooterModal("privacy")} type="button">
              개인정보처리방침
            </button>
            <button onClick={() => setActiveFooterModal("contact")} type="button">
              문의하기
            </button>
          </nav>
          <span>© 2026 Culture Keeper.</span>
        </div>
      </footer>
      {footerModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveFooterModal(null)}
          role="presentation"
        >
          <div
            aria-labelledby="footer-modal-title"
            aria-modal="true"
            className="application-modal footer-info-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="modal-heading">
              <div>
                <span className="section-label">컬처키퍼 안내</span>
                <h2 id="footer-modal-title">{footerModal.title}</h2>
              </div>
              <button
                className="modal-close"
                onClick={() => setActiveFooterModal(null)}
                ref={closeButtonRef}
                type="button"
              >
                닫기
              </button>
            </div>
            <p className="footer-info-modal-body">{footerModal.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
