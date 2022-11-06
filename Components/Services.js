import React from "react";
import Image from "next/legacy/image";
import design from "/public/design.png";
import consulting from "/public/consulting.png";
import code from "/public/code.png";

export default function Services() {
    return(
        <section>
            <div className=" dark:text-white">
            <h3 className="text-3xl py-1"> Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Since I started my career as a web developer, I have worked on a
              wide range of projects. I have worked with clients from all over
              the world, and{" "}
              <span className="text-teal-500">I am comfortable</span> working
              with <span className="text-teal-500">English</span> and{" "}
              <span className="text-teal-500">Spanish</span>.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Designs
              </h3>
              <p className="py-2">
                Tools I use to make a draft of the design of the website.
              </p>
              <h4 className="py-4 text-teal-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                programing languages
              </h3>
              <p className="py-2">
                Programming languages I use to build websites and web apps and
                apps in general.
              </p>
              <h4 className="py-4 text-teal-500">languages</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Kotlin</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <h4 className="py-4 text-teal-500">FrameWorks</h4>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Tailwind</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node</p>
              <p className="text-gray-800 py-1">Express</p>
              <h4 className="py-4 text-teal-500">Databases</h4>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">SQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} alt="cons" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Designs
              </h3>
              <p className="py-2">
                Tools I use to make a draft of the design of the website.
              </p>
              <h4 className="py-4 text-teal-500">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Ilustrator</p>
            </div>
          </div>
        </section>
    )
}