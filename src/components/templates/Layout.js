import React from "react";
import Navbar from "../molecules/Navbar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container content">{children}</div>
    </React.Fragment>
  );
}

export default Layout;
