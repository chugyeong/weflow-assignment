import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FOOTER_MENUS, FOOTER_SOCIAL_LINKS } from "../../constants/layout";
import PolicyModal from "../common/PolicyModal";
import {
  Container,
  Copyright,
  Inner,
  LegalBar,
  MenuGroup,
  MenuLink,
  MenuTitle,
  Policy,
  SocialList,
} from "../../styles/layout/footer";
import { Logo } from "../../styles/layout/header";

const Footer = () => {
  const navigate = useNavigate();
  const [policyType, setPolicyType] = useState("");

  const getMenuPath = (item, fallbackPath) => {
    if (item === "고객 리뷰") return "/reviews";
    if (item === "무료진단") return "/diagnosis";
    return fallbackPath;
  };

  return (
    <Container>
      <Inner>
        <MenuGroup>
          <MenuTitle>
            <Logo to="/">
              <img src="/logo.png" alt="WEFLOW" />
              <span>WEFLOW</span>
            </Logo>
            <p>제작부터 운영관리까지 비즈니스 성장을 함께합니다.</p>
          </MenuTitle>
          <p>대표: 윤서준</p>
          <p>사업자등록번호: 884-07-03480</p>
          <p>이메일: contact@weflowlab.kr</p>
          <p>운영시간: 연중무휴 24시간 상담 가능</p>
        </MenuGroup>

        {FOOTER_MENUS.map((menu) => (
          <MenuGroup key={menu.title}>
            <MenuTitle>{menu.title}</MenuTitle>

            {menu.items.map((item) => (
              <MenuLink key={item} type="button" onClick={() => navigate(getMenuPath(item, menu.path))}>
                {item}
              </MenuLink>
            ))}
          </MenuGroup>
        ))}

        <MenuGroup>
          <MenuTitle>상담문의</MenuTitle>
          <a href="tel:01029717280">전화: 010-2971-7280</a>
          <a href="mailto:contact@weflowlab.kr">이메일: contact@weflowlab.kr</a>
          <SocialList>
            {FOOTER_SOCIAL_LINKS.map((item) => (
              <a key={item.key} href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={`/footer/${item.key}.png`} alt={item.label} />
              </a>
            ))}
          </SocialList>
        </MenuGroup>

        <LegalBar>
          <Policy>
            <button type="button" onClick={() => setPolicyType("privacy")}>
              개인정보처리방침
            </button>
            <span>|</span>
            <button type="button" onClick={() => setPolicyType("terms")}>
              이용약관
            </button>
          </Policy>
          <Copyright>© 2026 WEFLOW. All rights reserved.</Copyright>
        </LegalBar>
      </Inner>
      <PolicyModal type={policyType} onClose={() => setPolicyType("")} />
    </Container>
  );
};

export default Footer;
