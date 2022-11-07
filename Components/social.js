import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Social() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-3 ">
      <a href="https://twitter.com/BrianGargallo" target="blank">
        <AiFillTwitterCircle className=" cursor-pointer" />
      </a>

      <a
        href="https://www.linkedin.com/in/brian-hermam-gargallo-carnalla-69b436233/"
        target="blank"
      >
        <AiFillLinkedin className="cursor-pointer" />
      </a>
      <a href="https://github.com/Zedieee" target="blank">
        <AiFillGithub className="cursor-pointer" />
      </a>
    </div>
  );
}
