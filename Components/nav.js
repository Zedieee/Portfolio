import {React, useState }from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { useTheme } from 'next-themes';
export default function Nav({setDark, dark, nav}) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {theme, setTheme} = useTheme()
        const router = useRouter();
        const [isNavOpen, setIsNavOpen] = useState(false);
    return (
      
        <nav className="py-10 mb-10 flex justify-between ">
<div className="flex-row flex">
<Link href="/"><IoChevronBack className="text-lg cursor-pointer md:text-2xl" /></Link>
        <h1 className="text-base font-burtons md:text-xl">{nav.title}</h1>
        </div>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a hhref={`/${router.locale}/projects`}>{nav.projects}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href={`/${router.locale}/Contact`}>{nav.Contact}</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href={`/${router.locale}/cv`}>CV</a>
              </li>
            </ul>
          </div>
        </section>
    
        <ul className="lg:flex items-center DESKTOP-MENU hidden ">
        
          <li>
            <BsFillMoonStarsFill onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer text-2xl" />
          </li>
          <li >
            <a
              className="bg-gradient-to-r from-rose-900 to-black text-white px-4 py-2 rounded-md ml-8"
              href={`/${router.locale}/projects`}
              
            >
              {nav.projects}
            </a>
          </li>
          <li>
            <Link
              className="bg-gradient-to-r from-rose-900 to-black text-white px-4 py-2 rounded-md ml-8"
              href={{
                pathname: `/${router.locale}/Contact`,
                query: { dark: dark },
              }}

            >
              {nav.Contact}
            </Link>
          </li>

       
        </ul>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </nav>
    );
    }