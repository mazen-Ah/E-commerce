import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="px-8">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
