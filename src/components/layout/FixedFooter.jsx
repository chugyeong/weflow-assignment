import { FIXED_FOOTER_MENUS } from "../../constants/layout";
import { BottomBarItem, FixedBottomBar } from "../../styles/layout/footer";

const FixedFooter = () => {
  return (
    <FixedBottomBar>
      <div>
        {FIXED_FOOTER_MENUS.map((menu) => {
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
