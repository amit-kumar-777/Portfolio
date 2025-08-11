import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Optional icons for menu toggle

function Header() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    nav("/");
    setMenuOpen(false); // Close menu on logo click
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 md:px-20 py-4">
        {/* Logo */}
        <h4
          className="text-lg font-semibold cursor-pointer"
          onClick={handleClick}
        >
          Amit Kumar
        </h4>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 gap-10">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {menuOpen && (
        <nav className="flex flex-col px-4 pb-4 space-y-4 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "opacity-20" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Header;
