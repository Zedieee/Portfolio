import React from "react";
import Image from "next/legacy/image";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import code from "/public/code.png";
import { FaReact } from "react-icons/fa";
export default function Services({services}) {
    return(
        <section>
            <div className=" dark:text-white">
            <h3 className="text-6xl py-1 font-bold">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
              {services.title}
                </span></h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              {services.desc}
              <span className="text-teal-500">{services.Comfortable}</span> {services.working} <span className="text-teal-500">{services.English}</span> {services.and}
              <span className="text-teal-500">{services.Spanish}</span>.
            </p>
          </div>
          <div className="lg:flex gap-20 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-3xl font-bold pt-8 pb-2">
                <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text ">
                  {services.design}
                </span>
                </h3>
              <p className="py-2">
                {services.designDesc}
              </p>
              <h4 className="py-4 text-teal-500">{services.toolsIUse}</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
              <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text ">
                {services.programming}
                </span>
              </h3>
              <p className="py-2">
                {services.programmingDesc}
              </p>
              <h4 className="py-4 text-teal-500">{services.languages}</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <div className="flex justify-center">
             <FaReact className="text-5xl flex w-24 h-24 self-center text-blue-600" />
             </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
              <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text ">
              FrameWorks {services.and} {services.databases}
              </span>
              </h3>
              <p className="py-2">
                {services.frameworksdesc}
              </p>
             <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">Express</p>
              <h4 className="py-4 text-teal-500">{services.databases}</h4>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">SQL</p> 
            </div>
          </div>
        </section>
    )
}