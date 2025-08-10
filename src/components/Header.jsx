import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();

  function handleClick() {
    nav("/");
  }
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between shadow-md">
      <h4
        className="text-lg font-semibold m-5 pl-20 hover:opacity-20 cursor-pointer"
        onClick={handleClick}
      >
        Amit Kumar
      </h4>
      <nav className="flex pr-20 space-x-12">
        <NavLink className={({isActive})=>isActive?"opacity-20":" "} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive})=>isActive?"opacity-20":" "} to="/about">
          About
        </NavLink>
        <NavLink className={({isActive})=>isActive?"opacity-20":" "} to="/projects">
          Projects
        </NavLink>
        <NavLink className={({isActive})=>isActive?"opacity-20":" "} to="/contact">
          Contact
        </NavLink>
        {/* <NavLink className={({isActive})=>isActive?"opacity-20":" "} to="/testing">
          Testing
        </NavLink> */}
      </nav>
    </div>
  );
}

export default Header;
