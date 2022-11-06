import React from "react";

export default function languageSelector() {
  const changeLanguage = (e) => {
    console.log(e.target.value);
  };

  return (
    <li>
      <select
        onChange={changeLanguage}
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
      >
        <option className="text-black" value="en">
          English
        </option>
        <option className="text-black" value="es">
          Spanish
        </option>
      </select>
    </li>
  );
}
