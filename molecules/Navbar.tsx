import Image from "next/image";
import React from "react";
import { scrollToElement } from "../utils/helpers";
import { IName } from "../utils/types";

const Navbar = ({ name, navLinks = Array(3).fill("link") }: IName) => {
  return (
    <nav className="px-[13.5rem] bg-white dark:bg-transparent dark:text-white flex items-center justify-between h-10">
      <h2 className="text-[#1f2937] dark:text-gray-200 font-bold ">{name}</h2>
      <div className="flex items-center gap-8">
        {navLinks.map((link, linkIndex) => (
          <span
            onClick={() => scrollToElement(link)}
            key={`nav-link-${linkIndex}`}
            className="p-2 capitalize cursor-pointer select-none"
          >
            {link}
          </span>
        ))}
        <Image
          className=""
          width={18}
          height={18}
          alt="theme-icon"
          src="/vectors/dark-icon.svg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
