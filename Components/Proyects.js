import React from "react";
import Image from "next/legacy/image";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web1 from "/public/web1.png";
import web6 from "/public/web6.png";

export default function Proyects() {
    return(
        <section>
        <div>
          <h3 className="text-3xl py-1"> Proyects</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            These are some of the projects I have worked on.
           </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image src={web1} alt="web1" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web2} alt="web2" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
           </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3} alt="web3" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} alt="web4" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web5} alt="web5" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
           </div>
          <div className="basis-1/3 flex-1">
            <Image src={web6} alt="web6" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
          </div>
        </div>
      </section>
    )
}