import type { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell">{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>CULTURE KEEPER</span>
          <nav aria-label="푸터 메뉴">
            <a href="/">이용약관</a>
            <a href="/">개인정보처리방침</a>
            <a href="/">문의하기</a>
          </nav>
          <span>© 2026 Culture Keeper.</span>
        </div>
      </footer>
    </div>
  );
}
