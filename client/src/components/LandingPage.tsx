import React from "react";
import NavButtons from "./NavButtons";
import { BsGithub } from "react-icons/bs";
import Footer from "./Footer";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
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
  const [show, setShow] = React.useState(false);

  return (
    <div className="flex overflow-hidden relative flex-col dark:bg-slate-900 bg-slate-200">
      <div
        className={`fixed ${
          scrollDirection === "down" ? "-translate-y-[100%]" : "translate-y-0"
        } top-0 bg-[#08192e45] backdrop-blur-md z-10 transition-all w-full duration-500`}
      >
        <nav className="p-4 flex justify-between items-center">
          <img
            src="proj-x-logo-removebg-preview.png"
            alt="logo"
            className="h-14 flex"
          />

          {/* <div className="flex text-xl font-bold notosans text-slate-700 dark:text-slate-200 whitespace-nowrap">
            Proj X
          </div> */}
          <ul className="hidden md:flex gap-4 items-center">
            <NavButtons text="About" />
            <NavButtons text="Contact" />
            <button className="bg-[#64FFDD40] duration-200 text-primary rounded-md hover:scale-105 px-4 py-2 transition-[transform]">
              Login
            </button>
            <button className="bg-primary-light duration-200 text-primary rounded-md px-4 py-2 hover:scale-105 transition-[transform]">
              SignUp
            </button>
            <div className="w-[3px] rounded h-full dark:bg-slate-200"></div>
            <a href="https://github.com/C-NikhilKarthik/ProjX">
              <BsGithub className="dark:text-slate-200 text-xl" />
            </a>
          </ul>

          <RxHamburgerMenu
            className="md:hidden flex text-slate-200 text-2xl cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          />
        </nav>
      </div>
      <div>
        <div className="flex image text-center justify-center items-center flex-col bg-cover bg-center w-full h-screen">
          <div className="flex text-[clamp(30px,8vw,50px)] font-semibold text-slate-200">
            Seamless Project Management
          </div>
          <div className="flex text-[clamp(10px,6vw,20px)] text-primary">
            Balancing Time, Cost, and Quality with Circus-like Precision!
          </div>
        </div>
        <Footer />
      </div>

      <div
        className={`absolute ${
          show ? "translate-x-0" : "translate-x-[100%]"
        } transition-transform duration-300 ease-in-out h-full w-full bg-slate-950/30 backdrop-blur z-50 flex flex-col`}
      >
        <div className="flex p-4 items-center bg-slate-950 justify-between">
          <img
            src="proj-x-logo-removebg-preview.png"
            alt="logo"
            className="h-14 flex"
          />
          <RxCross2
            className="md:hidden flex text-slate-200 text-2xl cursor-pointer"
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>

        
      </div>
    </div>
  );
}

export default LandingPage;
