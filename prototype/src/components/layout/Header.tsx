import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "메인", path: "/" },
  { label: "공간 찾기", path: "/spaces" },
  { label: "프로그램", path: "/programs" },
  { label: "게시판", path: "/board" }
];

export function Header() {
  return (
    <header className="site-header">
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
    </header>
  );
}
