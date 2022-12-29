import React from "react";

function Footer() {
  return (
    <div className="lowercase">
      {" "}
      <footer className="flex flex-col items-center justify-center py-6 w-full opacity-70 text-[1.5vh]">
        <p>
          Made by{" "}
          <a href="/#" className="font-caveat text-xl">
            AJR
          </a>
        </p>
        <p>
          Inspired from{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://reactportfoliotemplate.paytonpierce.dev/"
          >
            PP
          </a>
        </p>
        <p>&copy; 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
