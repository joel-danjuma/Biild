"use client";
import { FallInPlace } from "./motion/fall_in_place";
import { Features } from "./features";
import Image from "next/image";
import img from "@/public/vercel.svg";
import img2 from "@/public/list.png";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

// from-purple-500 light:to-white dark:to-black

const Hero = () => {
  return (
    <section className="w-full h-full">
      <div className="relative overflow-hidden min-h-screen">
        <div className="container mx-auto pt-40 lg:pt-60 pb-0">
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex space-y-20 items-center lg:p-0 p-2">
              <div className="container mx-auto">
                <div className="flex flex-col space-y-10 items-start">
                  <h1 className="lg:text-5xl text-3xl leading-8">
                    <FallInPlace>
                      Building Beautiful <br />
                      <span>& Functional Software</span>
                    </FallInPlace>
                  </h1>
                  <h2 className="dark:text-gray-400 text-gray-500 lg:text-xl text-lg">
                    <FallInPlace delay={0.4} fontWeight="medium">
                      We at Biild are dedicated to building great solutions for
                      the modern Web. <br />
                      We are a team of experienced developers, and creatives
                      commited, <br />
                      to building the perfect applications to suit yor needs.
                    </FallInPlace>
                  </h2>
                </div>
                {""}
                <FallInPlace delay={0.8}>
                  <div className="flex flex-row pt-8 pb-8">
                    <Image src={img} alt="img" height={28}></Image>
                  </div>
                  <div className="space-x-4 items-center">
                    <button className="max-w-lg p-2 bg-purple-500 rounded-xl border border-gray-500">
                      <Link href="#">Contact</Link>
                    </button>
                    <button className="max-w-lg p-2 rounded-xl border border-gray-500">
                      <Link href="#">Our Projects</Link>
                    </button>
                  </div>
                </FallInPlace>
              </div>
              <div className="h-[600px] absolute lg:block hidden lg:left-[60%] w-[80vw] max-w-[1100px] m-auto">
                <FallInPlace delay={1}>
                  <div className="overflow-hidden h-full">
                    <Image
                      src={img2}
                      width={1200}
                      height={762}
                      alt="Screenshot of a ListPage in Saas UI Pro"
                      quality="75"
                      priority
                    />
                  </div>
                </FallInPlace>
              </div>
            </div>
          </div>
        </div>
        <FallInPlace delay={0.6}>
          <Features
            className="container mx-auto pt-20"
            features={[
              {
                title: "Accessible",
                description:
                  "All components strictly follow WAI-ARIA standards.",
                icon: FiSmile,
              },
              {
                title: "Themable",
                description:
                  "Fully customize all components to your brand with theme support and style props.",
                icon: FiSliders,
              },
              {
                title: "Composable",
                description:
                  "Compose components to fit your needs and mix them together to create new ones.",
                icon: FiGrid,
              },
              {
                title: "Productive",
                description:
                  "Designed to reduce boilerplate and fully typed, build your product at speed.",
                icon: FiThumbsUp,
              },
            ]}
          />
        </FallInPlace>
      </div>
    </section>
  );
};

export default Hero;
