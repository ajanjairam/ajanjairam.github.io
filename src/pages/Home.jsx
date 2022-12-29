import React from "react";
import EmojiBullets from "../components/EmojiBullets";
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-home">
        <img
          alt="Ajan Jairam N"
          src={`${process.env.PUBLIC_URL}/images/ajr.png`}
          className="rounded-[50%] w-[35vh] md:w-[40vh] h-[35vh] md:h-[40vh] p-3 mb-4 sm:mb-0 md:mr-8 shadow-image bg-image"
        />
        <div className="text-left">
          <h1 className=" text-[2rem] md:text-5xl font-bold text-center md:text-left">
            Hi I'm <span className="bg-text">Ajan Jairam N</span>
            <span className="animate-wave origin-[70%_70%] inline-block">
              🤚
            </span>
          </h1>
          <h2 className="text-xl md:text-[2rem] font-bold text-center md:text-left">
            I'm a Full Stack Developer.
          </h2>
          <EmojiBullets />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Home;
