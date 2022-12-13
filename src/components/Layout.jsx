import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
