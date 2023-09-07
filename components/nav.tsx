"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <header className=" absolute top-0 flex w-full">
      {/* Desktop Nav */}
      <nav className="relative lg:flex hidden text-xl flex-row w-full h-full p-4 justify-center items-center z-20">
        <Link href="/" className="absolute left-2">
          biild
        </Link>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
        </ul>
        <Link href="#Contact" className="absolute right-2">
          Get In Touch
        </Link>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden flex min-w-full">
        {
          <nav className="min-w-full h-10 flex justify-between p-4 z-20">
            <Link href="/" onClick={() => setToggleDropdown(false)}>
              <p className="bg-white bg-clip-text text-transparent text-md font-bold">
                biild
              </p>
            </Link>
            <FiMenu
              className="w-7 h-7 "
              onClick={() => {
                setToggleDropdown((prev) => !prev);
                // setToggleDropdown(!toggleDropdown);
              }}
            />
          </nav>
        }
        {toggleDropdown && (
          <nav className="absolute top-12 h-50 w-full flex justify-center bg-white text-black z-10">
            <ul className="space-y-2 flex flex-col pt-20">
              <li>
                <Link href="#"> About</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
