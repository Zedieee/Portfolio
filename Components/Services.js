import React from "react";
import Image from "next/legacy/image";
import design from "/public/design.png";
import code from "/public/code.png";
import { FaReact } from "react-icons/fa";
import FigmaLogo from "/public/figmalogo.png";

export default function Services({services}) {
    return(
        <section>
            <div className=" dark:text-white">
           <h3 className="text-6xl font-bold py-1">
            <span className="text-transparent bg-gradient-to-r from-rose-900 to-black bg-clip-text">
          {services.title}
          </span>
         </h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white font-medium font-sans">
              {services.desc}
              <span className="text-rose-500">{services.Comfortable}</span> {services.working} <span className="text-rose-500">{services.English}</span> {services.and}
              <span className="text-rose-500">{services.Spanish}</span>.
            </p>
          </div>
          <div className="lg:flex gap-20 ">
            <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-indigo-50">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-3xl font-bold pt-8 pb-2">
                <span className="text-transparent bg-gradient-to-r from-rose-800 to-slate-800 bg-clip-text">
                {services.design}
                </span>
              </h3>
              <p className="py-2 font-extralight text-xl ">
                {services.designDesc}
              </p>
              <h4 className="py-4 text-rose-700 font-semibold text-xl ">{services.toolsIUse}</h4>
              <div className="flex items-center flex-col">
              <p className="text-black py-1 font-light text-xl">Figma</p>
              <Image src={FigmaLogo} className="" width={'32%'} height={'50%'} alt="figma"  />
              </div>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-indigo-50">
              <Image src={code} alt="design" width={100} height={100} />
              <h3 className="text-3xl font-bold pt-8 pb-2">
              <span className="text-transparent bg-gradient-to-r from-rose-800 to-slate-800 bg-clip-text">
                {services.programming}
                </span>
              </h3>
              <p className="py-2 font-extralight text-xl" >
                {services.programmingDesc}
              </p>
              <h4 className="py-4 text-rose-700 font-semibold text-xl">{services.languages}</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-indigo-50">
              <div className="flex justify-center">
             <FaReact className="text-5xl flex w-24 h-24 self-center text-rose-800" />
             </div>
              <h3 className="text-3xl font-bold pt-8 pb-2">
              <span className="text-transparent bg-gradient-to-r from-rose-800 to-slate-800 bg-clip-text">
              FrameWorks {services.and} {services.databases}
                </span>
              </h3>
              <p className="py-2 font-extralight text-xl">
                {services.frameworksdesc}
              </p>
             <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">Express</p>
              <h4 className="py-4 text-rose-700 font-semibold text-xl">{services.databases}</h4>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">SQL</p> 
            </div>
          </div>
        </section>
    )
}