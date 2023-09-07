"use client";
import { FallInPlace } from "./motion/fall_in_place";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import React from "react";

const Nav = () => {
  //   const [toggleDropdown, setToggleDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const navigation = ["About", "Services", "Contact"];
  gsap.set(".nav-bg", {
    backgroundColor: "#232323",
    opacity: 0,
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      start: "top += 200px",
      end: "+=1",
      toggleActions: "play none none reverse",
      scrub: 2,
    },
  });
  tl.to(".nav-bg", {
    opacity: 1,
  });
  return (
    <header className="sticky top-0 flex w-full z-10">
      <div id="nav-bg" className="-z-1 nav-bg"></div>
      <FallInPlace className="w-full" delay={0.4}>
        <nav className="w-full p-4 relative flex items-center justify-between lg:justify-between xl:px-0 z-20">
          {/* Mobile Nav */}
          <div className="lg:hidden w-full h-full">
            <>
              <div className="flex flex-wrap items-center justify-between w-full ">
                {/* Logo  */}
                <Link href="/">
                  <div className="flex  items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-500 z-20">
                    <span>Biild</span>
                  </div>
                </Link>

                <button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden  dark:focus:text-white focus:text-black focus:outline-none dark:text-gray-500 dark:focus:bg-trueGray-700"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}

                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </button>
                {open && (
                  <div className="absolute left-0 top-0 min-w-full min-h-screen glassmorphism items-center flex flex-col mt-20 w-full space-y-5 lg:hidden ">
                    <>
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          href={`#${item.toLowerCase()}`}
                          onClick={() => {
                            setOpen(!open);
                          }}
                        >
                          <div className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                            {item}
                          </div>
                        </Link>
                      ))}
                      <Link href="#contact">
                        <div className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                          Contact Us
                        </div>
                      </Link>
                    </>
                  </div>
                )}
              </div>
            </>
          </div>
          {/* Desktop Nav */}
          <div className="lg:flex hidden w-full justify-between text-center lg:items-center container mx-auto">
            {/* Logo  */}
            <Link href="/">
              <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-500">
                <span>Biild</span>
              </div>
            </Link>
            <ul className="justify-center flex pt-6 list-none lg:pt-0">
              {navigation.map((item, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link href={`#${item.toLowerCase()}`}>
                    <div className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                      {item}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <div className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Contact Us
              </div>
            </Link>
          </div>
        </nav>
      </FallInPlace>
    </header>
  );
};

export default Nav;
