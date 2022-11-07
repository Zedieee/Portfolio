import React from "react";
import Image from "next/legacy/image";
import deved from "/public/dev-ed-wave.png";

export default function ImageDev() {
  return (
    <div className="relative mx-auto bg-gradient-to-b  from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
      <Image src={deved} layout="fill" objectFit="cover"  alt="dev-ed" priority={true} />
    </div>
  );
} 
