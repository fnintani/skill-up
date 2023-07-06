import React, { useEffect, useState } from "react";
import { navLinks } from "./../../data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-background" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div
        className={`${
          active ? "py-2 transition-all duration-300" : "py-4"
        } container  mx-auto flex items-center justify-between px-2`}
      >
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
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden w-96 h-full fixed top-0 left-0 z-10 bg-blueMain text-limeSecondary flex flex-col justify-center items-center shadow-lg gap-8 py-8"
          >
            {navLinks.map((link) => {
              return (
                <MobileNavLink
                  key={link.id}
                  {...link}
                  setToggleNav={setToggleNav}
                />
              );
            })}
            <HiX
              className="cursor-pointer absolute right-12 top-12 text-3xl text-limeSecondary"
              onClick={(prev) => setToggleNav(!prev)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
