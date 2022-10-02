import React from "react";
import { Navbar, Footer } from "../molecules";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
