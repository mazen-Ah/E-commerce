import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import SideNav from "./sideNav/SideNav";
const Menu = ({ menu, setMenu }) => {
  console.log(menu);
  return (
    <div className="">
      <AiOutlineMenuUnfold
        className="text-2xl opacity-40 cursor-pointer"
        onClick={() => setMenu(true)}
      />
      {menu && <SideNav menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Menu;
