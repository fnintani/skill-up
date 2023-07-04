import React, { useState } from "react";
import { navLinks } from "./../../data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-2">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <div className="text-3xl cursor-pointer sm:hidden">
          <HiMenuAlt1 onClick={() => setToggleNav(true)} />
        </div>
        <div className="uppercase font-bold text-xl tracking-wide text-blueMain">
          skill-up
        </div>
        <div className="sm:flex hidden">
          {navLinks.map((links) => {
            return <NavLink key={links.id} {...links}></NavLink>;
          })}
        </div>
        <button className="py-3 px-6 text-sm font-bold border-2 border-blueMain border-solid rounded-lg">
          Sign-Up
        </button>
        {toggleNav && (
          <div className="sm:hidden w-96 h-full fixed top-0 left-0 z-10 bg-blueMain text-limeSecondary flex flex-col justify-center items-center shadow-lg gap-8 py-8">
            {navLinks.map((link) => {
              return <MobileNavLink key={link.id} {...link} setToggleNav={setToggleNav} />;
            })}
            <HiX className="cursor-pointer absolute right-12 top-12 text-3xl text-limeSecondary" onClick={(prev) => setToggleNav(!prev)}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
