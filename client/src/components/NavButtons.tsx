import React from "react";

function NavButtons({ text }: { text?: string }) {
  return (
    <li className="dark:text-slate-300 cursor-pointer text-slate-700 after:w-0 after:h-[2px] after:transition-[width] hover:after:w-full after:duration-300 after:rounded dark:after:bg-slate-300 after:flex">
      {text}
    </li>
  );
}

export default NavButtons;
