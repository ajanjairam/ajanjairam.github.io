import React from "react";

function EmojiBullets() {
  return (
    <ul className="p-[.8rem]">
      <li className="cursor-default text-base transition-all hover:-translate-y-[3px] duration-[250ms]">
        <span className=" text-2xl mr-2 md:mr-4">☕</span> hobbies - programming
        & movies.
      </li>
      <li className="cursor-default text-base transition-all hover:-translate-y-[3px] duration-[250ms]">
        <span className=" text-2xl mr-2 md:mr-4">🌎</span> from{" "}
        <span className="font-tamil">தமிழ் நாடு</span>, India.
      </li>
      <li className="cursor-default text-base transition-all hover:-translate-y-[3px] duration-[250ms]">
        <span className=" text-2xl mr-2 md:mr-4">💼</span> Software Engineer
        Trainee at Cognizant.
      </li>
      <li className="cursor-default text-base transition-all hover:-translate-y-[3px] duration-[250ms]">
        <span className=" text-2xl mr-2 md:mr-4">📧</span>{" "}
        najanjairam@protonmail.com
      </li>
    </ul>
  );
}

export default EmojiBullets;
