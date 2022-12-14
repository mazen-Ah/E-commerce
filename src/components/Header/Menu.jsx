import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Sidenav from "./Sidenav";
const Menu = ({ menu, setMenu }) => {
  console.log(menu);
  return (
    <div className="sm:hidden">
      <AiOutlineMenuUnfold onClick={() => setMenu(true)} />
      {menu && <Sidenav menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Menu;
