import React from "react";
import NavButtons from "./NavButtons";
import { BsGithub } from "react-icons/bs";
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState("");

  React.useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function LandingPage() {
  const scrollDirection = useScrollDirection();

  return (
    <div className="flex flex-col dark:bg-slate-900 bg-slate-200">
      <div
        className={`fixed ${
          scrollDirection === "down" ? "-translate-y-[100%]" : "translate-y-0"
        } top-0 bg-[#08192e45] backdrop-blur-md z-10 transition-all w-full duration-500`}
      >
        <nav className="p-4 flex justify-between">
          <div className="flex text-xl font-bold notosans text-slate-700 dark:text-slate-200 whitespace-nowrap">
            Proj X
          </div>
          <ul className="hidden md:flex gap-4 items-center">
            <NavButtons text="About" />
            <NavButtons text="Contact" />
            <div className="w-[3px] rounded h-full dark:bg-slate-200"></div>
            <a href="https://github.com/C-NikhilKarthik/ProjX">
              <BsGithub className="dark:text-slate-200 text-xl" />
            </a>
          </ul>
        </nav>
      </div>
      <div className="flex bg-[url('https://tailwindcss.com/_next/static/media/8-dark@tinypng.7abc66a1.png')] bg-cover bg-center w-full h-screen"></div>
    </div>
  );
}

export default LandingPage;
