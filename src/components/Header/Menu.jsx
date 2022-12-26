import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Sidenav from "./Sidenav";
const Menu = ({ menu, setMenu }) => {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
      <AiOutlineMenuUnfold
        className="text-xl opacity-40"
        onClick={() => setMenu(true)}
      />
      {menu && <Sidenav menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Menu;
