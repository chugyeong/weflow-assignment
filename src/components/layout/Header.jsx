import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Inner,
  Nav,
  Logo,
  DiagnosisButton,
  MobileMenuButton,
} from "../../styles/layout/header";

const navItems = [
  { to: "/", label: "홈" },
  { to: "/service", label: "서비스" },
  { to: "/pricing", label: "가격안내" },
  { to: "/cases", label: "성공사례" },
  { to: "/reservation", label: "상담예약" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <Container ref={headerRef}>
      <Inner>
        <Logo to="/">
          <img src="/logo.png" alt="WEFLOW" />
          <span>WEFLOW</span>
        </Logo>
        <Nav $isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <DiagnosisButton to="/diagnosis">무료 진단 받기</DiagnosisButton>
        <MobileMenuButton
          type="button"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Inner>
    </Container>
  );
};

export default Header;
