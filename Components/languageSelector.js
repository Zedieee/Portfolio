import React from "react";
import { useRouter } from 'next/router'


export default function languageSelector({langSelector}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

  const changeLanguage = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <div className="md:px-14">
      <select
        onChange={changeLanguage}
        defaultValue={router.locale}
        className="bg-gradient-to-r from-rose-900 to-black text-white px-4 py-2 rounded-md ml-8"
      >
        <option className="text-black" value="en">
          {langSelector.en } 
        </option>
        <option className="text-black" value="es">
          {langSelector.es}
        </option>
      </select>
      </div>
  );
}
