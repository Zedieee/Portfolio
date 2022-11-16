import React from "react";
import Image from "next/legacy/image";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web1 from "/public/web1.png";


export default function Proyects({proyects}) {

    return(
        <section id="projects">
        <div className="dark:text-white">
          <h3 className="text-6xl py-1 font-bold"> 
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
          {proyects.title}
          </span>
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            {proyects.desc}
           </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <a href="https://github.com/Zedieee/league-match-history" target="blank">
            <Image src={web1} alt="web1" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          </div>
          <div className="basis-1/3 flex-1">
          <a href="https://github.com/Zedieee/REST-API-prueba" target="blank">
            <Image src={web2} alt="web2" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
           </div>
          <div className="basis-1/3 flex-1">
          <a href="https://github.com/Zedieee/AppSocket" target="blank">
            <Image src={web3} alt="web3" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </a>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} alt="web4" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
          </div>

        </div>
      </section>
    )
}