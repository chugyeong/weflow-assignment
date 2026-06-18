import { Phone, MessageCircle, FileText, SearchCheck } from "lucide-react";
import { FixedBottomBar, BottomBarItem } from "../../styles/layout/footer";

const menus = [
  {
    label: "24시간 상담",
    icon: Phone,
    link: "tel:010-2971-7280",
    color: "text-emerald-300",
  },
  {
    label: "카카오 문의",
    icon: MessageCircle,
    link: "https://pf.kakao.com/_xntCbX",
    color: "text-yellow-300",
  },
  {
    label: "블로그",
    icon: FileText,
    link: "https://m.blog.naver.com/weflowlab",
    color: "text-sky-300",
  },
  {
    label: "무료진단",
    icon: SearchCheck,
    link: "/diagnosis",
    color: "text-we-blue-100",
  },
];

const FixedFooter = () => {
  return (
    <FixedBottomBar>
      <div>
        {menus.map((menu) => {
          const Icon = menu.icon;
          return (
            <BottomBarItem
              key={menu.label}
              href={menu.link}
              target={menu.link.startsWith("http") ? "_blank" : undefined}
              rel={menu.link.startsWith("http") ? "noopener noreferrer" : undefined}>
              <Icon className={menu.color} size={18} />
              <span>{menu.label}</span>
            </BottomBarItem>
          );
        })}
      </div>
    </FixedBottomBar>
  );
};

export default FixedFooter;
