import React from "react";


export default function Me({me}) {

    return (
        <div className="text-center p-10">
        <h2 className="py-2 ">
          <span className="text-5xl font-bold md:text-6xl ">{me.hi} </span>
          <span className="text-5xl font-bold text-cyan-500 md:text-6xl">Brian</span>
        </h2>
        <h3 className="text-2xl font-light md:text-3xl">{me.dev}</h3>
        <p className="text-md py-5 leading-8 font-light text-gray-500 md:text-xl max-w-xl  mx-auto">
          {me.about}

        </p>
      </div>
    );
    }
