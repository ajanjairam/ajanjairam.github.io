import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="w-full">
        <ul className="flex gap-8 md:gap-32 items-center justify-center lowercase">
          <li className="hover:-translate-y-[3px] transition-all duration-[250ms]">
            <a
              href="/about"
              className="hover:text-[#c9c9c9] transition-colors duration-200"
            >
              <p className="pb-2">About Me</p>
            </a>
          </li>
          <li className="hover:-translate-y-[3px] transition-all duration-[250ms]">
            <a
              href="/_"
              className="hover:text-[#c9c9c9] transition-colors duration-200"
            >
              <h1 className="text-[2rem] text-center font-caveat uppercase">
                AJR
              </h1>
            </a>
          </li>
          <li className="hover:-translate-y-[3px] transition-all duration-[250ms]">
            <a
              href="/portfolio"
              className="hover:text-[#c9c9c9] transition-colors duration-200"
            >
              <p className="pb-2">Portfolio</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
