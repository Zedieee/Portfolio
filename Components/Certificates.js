import React from 'react'
export default function Certificate({certificates}) {
    return (
        <section id="Certificates">
        <div className="dark:text-white">
          <h3 className="text-6xl py-5 font-bold"> 
          <span className="text-transparent bg-gradient-to-r from-rose-800 to-slate-800 bg-clip-text">
          {certificates.title}
          </span>
         </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            <div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://img.stackshare.io/stack/12741/bcc87e47eb053f5947fa6dbe45beba33a3d1dc56.png" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{certificates.cert1}</h5>
      <p className="text-gray-700 text-base mb-4">
       {certificates.desc1}
      </p>
      <p className="text-gray-600 text-xs">{certificates.issued1}</p>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{certificates.cert2}</h5>
      <p className="text-gray-700 text-base mb-4">
       {certificates.desc2}
      </p>
      <p className="text-gray-600 text-xs">{certificates.issued2}</p>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{certificates.cert3}</h5>
      <p className="text-gray-700 text-base mb-4">
         {certificates.desc3}
      </p>
      <p className="text-gray-600 text-xs"> {certificates.issued3} </p>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{certificates.cert4}</h5>
      <p className="text-gray-700 text-base mb-4">
        {certificates.desc4}
      </p>
      <p className="text-gray-600 text-xs">{certificates.issued4}</p>
    </div>
  </div>
  
</div>
            </div>
         </div>
         </section>
    )
}
    