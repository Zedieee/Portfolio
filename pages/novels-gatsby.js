import React from "react";
import Head from "next/head";
import Nav from "../Components/nav";
import ButtonUp from "../Components/buttonUp";
import LanguageSelector from "../Components/languageSelector";
import Image from "next/image";
import gatsby from  "../public/Gatsby.png";
import contentful from  "../public/contentful.png";
import netlify from  "../public/netlify.png";
import examplesContentful from  "../public/examplesContentful.png";
import web4 from  "../public/web4.png";
import netlifydeploy from  "../public/netlifydeploy.png";
import github from  "../public/github.png";
import repository from  "../public/repository.png";
import { AiFillGithub } from "react-icons/ai";

export default function novels(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dark, setDark] = React.useState(false);
    const { index, me, services, proyects, nav, langSelector,novels } = props;
    return(
        <div className={dark ? "dark" : ""}>
        <Head>
          <title>{novels.title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen  dark:text-white">
          <div>
            <Nav setDark={setDark} dark={dark} nav={nav} />
            <LanguageSelector langSelector={langSelector} />
          </div>
          <div className="text-center p-10">
        <h2 className="py-2 ">
          <span className="text-5xl font-bold md:text-6xl ">Novels Page with </span>
          <span className="text-5xl font-bold text-purple-800 md:text-6xl">Gatsby</span>
        </h2>
        <h3 className="text-2xl font-light md:text-3xl">and 
       <span className="text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 via-yellow-400 to-red-500 md:text-5xl"> Contentful</span>
       </h3>
      </div>
      <div className="flex justify-center p-2">
        <Image src={gatsby} className="w-16 h-16 md:w-32 md:h-32" alt="gatsby icon"/>
        <span className="self-center text-4xl px-1 md:px-8 md:text-5xl">+</span>
        <Image src={contentful} className="w-14 h-16  md:w-28 md:h-32 " alt="contentful icon"/>
        <span className="self-center text-4xl px-1 md:px-8 md:text-5xl">+</span>
        <Image src={netlify} className="w-16 h-16  md:w-24 md:h-32" alt="netlify icon"/>
        <span className="self-center text-4xl px-1 md:px-8 md:text-5xl">+</span>
        <AiFillGithub className="self-center text-6xl md:text-9xl dark:text-white"/>

      </div>
      <div>
        <p className="text-center text-2xl font-light md:text-3xl p-6">Deployed on
        <span className="text-5xl text-transparent bg-teal-500 bg-clip-text font-bold"> Netlify</span>
        </p>
      </div>
      <div className="flex justify-center p-2">
        <a href="https://the-great-zedieee-site.netlify.app" target="_blank" rel="noreferrer" className="bg-purple-800 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600">Live Demo</a>
      </div>
        </section>
      <section className="min-h-screen  dark:text-white">
        <div className="py-2 text-center   ">
          <h2 className="text-5xl md:text-6xl font-bold" >Page Config</h2>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <p className="text-2xl md:text-3xl font-semibold p-2"> <span className="text-2xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-400 via-yellow-400 to-red-500 md:text-3xl">Contentful</span> as a CMS</p>
            <Image src={examplesContentful} className="rounded-lg " alt="contentful icon"/>
          </div>
          <div className="basis-1/3 flex-1">
            <p className="text-2xl md:text-3xl font-semibold p-2"> <span className="text-2xl text-transparent bg-clip-text font-bold bg-purple-800 md:text-3xl">Gatsby</span> as a Static Site Generator</p>
            <Image src={web4} className="rounded-lg " alt="web4"/>
            </div>
          <div className="basis-1/3 flex-1">
            <p className="text-2xl md:text-3xl font-semibold p-2"> <span className="text-2xl text-transparent bg-clip-text font-bold bg-teal-500 md:text-3xl">Netlify</span> as a Hosting</p>
            <Image src={netlifydeploy} className="rounded-lg " alt="netlify icon"/>
            </div>
            <div className="basis-1/3 flex-1">
            <p className="text-2xl md:text-3xl font-semibold p-2"> <span className="text-2xl text-transparent bg-clip-text font-bold bg-black md:text-3xl dark:bg-slate-300">Github</span> as a Version Control</p>
            <Image src={repository} className="rounded-lg " alt="github icon"/>
            </div>
            

          </div>
        </div>
      </section>
      </main>
      <ButtonUp />
        </div>
    )
}
export async function getStaticProps({ locale }) {
  const res = await import(`../lang/${locale}.json`);

  return {
    props: {
      index: res.default.index,
      me: res.default.me,
      services: res.default.services,
      proyects: res.default.proyects,
      nav: res.default.nav,
      langSelector: res.default.langSelector,
      novels: res.default.novels,
    },
  };
}