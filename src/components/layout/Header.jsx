import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/layout";
import {
  Container,
  DiagnosisButton,
  Inner,
  Logo,
  MobileMenuButton,
  Nav,
} from "../../styles/layout/header";

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
        <Logo to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="WEFLOW" />
          <span>WEFLOW</span>
        </Logo>
        <Nav $isOpen={isMenuOpen}>
          {NAV_ITEMS.map((item) => (
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
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </MobileMenuButton>
      </Inner>
    </Container>
  );
};

export default Header;
