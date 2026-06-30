import { NavLink } from "react-router-dom";
import culturekeeperWordmark from "../../assets/logos/culturekeeper-wordmark.svg";

const menuItems = [
  { label: "홈", path: "/" },
  { label: "공간 찾기", path: "/spaces" },
  { label: "프로그램", path: "/programs" },
  { label: "게시판", path: "/board" }
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink className="site-wordmark" to="/">
          <img
            className="site-header-logo"
            src={culturekeeperWordmark}
            alt="컬처키퍼"
          />
        </NavLink>
        <nav className="site-nav" aria-label="주요 메뉴">
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
              end={item.path === "/"}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="header-cta" to="/spaces">
          시작하기
        </NavLink>
      </div>
    </header>
  );
}
