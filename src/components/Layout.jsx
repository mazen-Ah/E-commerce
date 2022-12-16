import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full px-8 max-w-7xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
