import React from "react";
import Proyects from "../Components/proyects";
import Head from "next/head";
import Nav from "../Components/nav";
import LanguageSelector from "../Components/languageSelector";

export default function Projects(props) {
  const [dark, setDark] = React.useState(false);
  const { index, nav, proyects } = props;
  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>{index.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen  dark:text-white">
          <div >
            <Nav setDark={setDark} dark={dark} nav={nav} />

          </div>
          <div className="py-10">
            <Proyects proyects={proyects} />
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
      index: res.default.index,
      me: res.default.me,
      services: res.default.services,
      proyects: res.default.proyects,
      nav: res.default.nav,
    },
  };
}