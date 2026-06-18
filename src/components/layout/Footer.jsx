import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PolicyModal from "../common/PolicyModal";
import {
  Container,
  Inner,
  Copyright,
  MenuGroup,
  MenuTitle,
  MenuLink,
  Policy,
  SocialList,
} from "../../styles/layout/footer";
import { Logo } from "../../styles/layout/header";

const footerMenus = [
  {
    title: "서비스",
    path: "/service",
    items: ["홈페이지 제작 과정", "랜딩페이지 제작", "광고 운영 및 관리"],
  },
  {
    title: "플랜",
    path: "/pricing",
    items: ["제작 플랜", "케어 플랜", "광고 플랜"],
  },
];

const social = [
  {
    key: "kakao",
    label: "카카오톡",
    link: "https://pf.kakao.com/_xntCbX",
  },
  {
    key: "blog",
    label: "블로그",
    link: "https://m.blog.naver.com/weflowlab",
  },
  {
    key: "instagram",
    label: "인스타그램",
    link: "https://www.instagram.com/weflowlab.kr?igsh=b2c1eTdwbHo2bWRt",
  },
  {
    key: "facebook",
    label: "페이스북",
    link: "https://www.facebook.com/profile.php?id=61590187124682&sk=about",
  },
];

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
          <p>대표: 유서준</p>
          <p>사업자등록번호: 884-07-03480</p>
          <p>이메일: contact@weflowlab.kr</p>
          <p>운영시간: 연중무휴 24시간 상담 가능</p>
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
        </MenuGroup>

        {footerMenus.map((menu) => (
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
            {social.map((item) => (
              <a key={item.key} href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={`/footer/${item.key}.png`} alt={item.label} />
              </a>
            ))}
          </SocialList>
        </MenuGroup>
      </Inner>
      <PolicyModal type={policyType} onClose={() => setPolicyType("")} />
    </Container>
  );
};

export default Footer;
