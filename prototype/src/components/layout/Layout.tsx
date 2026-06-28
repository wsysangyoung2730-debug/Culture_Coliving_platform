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
    </div>
  );
}
