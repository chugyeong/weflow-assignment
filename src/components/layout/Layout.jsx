import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import FixedFooter from "./FixedFooter";
import ScrollToTop from "./ScrollToTop";

import { Root, Content } from "../../styles/layout/layout";

function Layout() {
  return (
    <Root>
      <ScrollToTop />
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <FixedFooter />
    </Root>
  );
}

export default Layout;
