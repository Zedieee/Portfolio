import { useState } from "react";
import React from "react";

export default function Form({ contact }) {
  const { check, setCheck } = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault()
    alert(`${contact.thanks} ${name} ${contact.thanksDesc}`)
  let data = {
      name,
      email,
      message
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <form action="#">
      <div className="form-group mb-6">
        <input
          type="text"
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput7"
          placeholder={contact.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-6">
        <input
          type="email"
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput8"
          placeholder={contact.email}
            onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-6">
        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleFormControlTextarea13"
          rows="3"
          placeholder={contact.message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
     
      <button
        type="submit"
        className="
      w-full
      px-6
      py-2.5
      bg-black
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      onClick={(e) => {handleSubmit(e)}}
      >
        {contact.send}
       
      </button>
    </form>
  );
}
