import React from "react";
import Head from "next/head";
import { useState } from "react";
import Nav from "../Components/nav";
import Form from "../Components/form";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useRouter } from "next/router";

export default function Contact(props) {
  const router = useRouter();
  const data = router.query.dark;
  const { contact, nav } = props;
  const [dark, setDark] = useState(data);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>{contact.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/folder.png" />
      </Head>

      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen  dark:text-white">
          <div>
            <Nav setDark={setDark} dark={dark} nav={nav} />
          </div>

          <div className="flex justify-center ">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md dark:bg-slate-200 dark:text-black">
              <div className="pb-5 text-center">
                <h1 className="font-sans font-medium text-2xl">
                  {contact.title}
                </h1>
                <h2 className="font-sans text-xl ">{contact.desc}</h2>
              </div>
              <Form contact={contact} />
            </div>
          </div>
          <div className="flex justify-center py-10 gap-10 dark:text-white ">
            <a
              href={"mailto:gargallocarnallabrianhermam@gmail.com?subject="+contact.mail}
              target="blank"
            >
              {" "}
              <AiFillGoogleCircle className="text-5xl " />
            </a>
            <a
              href="https://www.linkedin.com/in/brian-hermam-gargallo-carnalla-69b436233/"
              target="blank"
            >
              {" "}
              <AiFillLinkedin className="text-5xl " />
            </a>
            <a
              href="https://twitter.com/BrianGargallo"
              target="blank"
            >
              <AiFillTwitterCircle className="text-5xl" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const res = await import(`../lang/${locale}.json`);

  return {
    props: {
      contact: res.default.contact,
      nav: res.default.nav,

    },
  };
}
