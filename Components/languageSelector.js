import React from "react";
import { useRouter } from 'next/router'


export default function languageSelector() {
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
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
      >
        <option className="text-black" value="en">
          English
        </option>
        <option className="text-black" value="es">
          Spanish
        </option>
      </select>
      </div>
  );
}
