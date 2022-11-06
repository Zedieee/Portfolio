import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import LanguageSelector from "./languageSelector";

export default function Nav({setDark, dark}) {
    const [darkMode,setDarkMode] = useState(false);
    
    return (
        <nav className="py-10 mb-10 flex justify-between">
        <h1 className="text-xl font-burtons">Portfolio</h1>
       
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill onClick={()=> setDark(!dark)} className="cursor-pointer text-2xl" />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Proyects
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Contact
            </a>
          </li>
          <LanguageSelector/> 
        </ul>
       
      </nav>
    );
    }