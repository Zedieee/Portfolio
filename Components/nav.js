import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
export default function Nav({setDark, dark, nav}) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const router = useRouter();

    return (
      
        <nav className="py-10 mb-10 flex justify-between ">
<div className="flex-row flex">
<Link href="/"><IoChevronBack className="text-lg cursor-pointer md:text-2xl" /></Link>
        <h1 className="text-base font-burtons md:text-xl">{nav.title}</h1>
        </div>
       
    
        <ul className="flex items-center ">
        
          <li>
            <BsFillMoonStarsFill onClick={()=> setDark(!dark)} className="cursor-pointer text-2xl" />
          </li>
          <li >
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href={`/${router.locale}/projects`}
              
            >
              {nav.projects}
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href={`/${router.locale}/Contact`}

            >
              {nav.Contact}
            </a>
          </li>

       
        </ul>
       
      </nav>
    );
    }