import React from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";

export default function Social() {
    return(
        <div className="text-5xl flex justify-center gap-16 py-3 ">
        <AiFillTwitterCircle className=" cursor-pointer" />
        <AiFillLinkedin className="cursor-pointer" />
        <AiFillGithub className="cursor-pointer" />
      </div>
    )
}