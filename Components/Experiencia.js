export default function Experiencia({experiencia}) {

    return(
        <section id="projects">
        <div className="dark:text-white">
          <h3 className="text-6xl py-1 font-bold"> 
          <span className="text-transparent bg-gradient-to-r from-rose-800 dark:to-slate-400  to-slate-800 bg-clip-text">
          {experiencia.title}
          </span>
         </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white font-medium font-sans">
            {experiencia.desc}
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
           

<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://pbs.twimg.com/profile_images/525406577080037377/HqN22PuY_400x400.png" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Ayuntamiento de Cuernavaca/Intern Engineer</h5>
      <p className="text-gray-700 text-base mb-4">
      • maquetación, diagramas, mejoras para el sistema
de trámites en línea para empresas
emprendedoras. Usé JavaScript, HTML, CSS,
MYSQL, NextJS.
• Migración de un proyecto de desarrollo en el frameWork Play.
      </p>
      <p className="text-gray-600 text-xs"> Julio 2022 – Diciembre 2022, Morelos, Cuernavaca </p>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2022/04/que-es-android-studio-scaled-1200x675.jpg" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">MONIREO OBD/JR Android Programmer</h5>
      <p className="text-gray-700 text-base mb-4">
      • Crear nuevas funcionalidades en la aplicacación.<br/>
• Arreglar bugs y optimizar el código de la aplicación<br/>
• Lenguajes: Java, VisualBasic<br/>
• Firebase, Android Studio<br/>
      </p>
      <p className="text-gray-600 text-xs"> Enero 2023 – , Mayo 2023 CDMX, Narvarte Poniente
 </p>
    </div>
  </div>
  
</div>
<div className="flex justify-center">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://pbs.twimg.com/card_img/1663728672769974275/t7Bz-es-?format=jpg&name=4096x4096" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Bio-agrizer S.C/Programador WEB</h5>
      <p className="text-gray-700 text-base mb-4">
      • Programacion de ecommerce para empresa de agricultura. <br/>
• ha tenido como objetivo la creación de una
aplicación web de comercio electrónico que
permita a los usuarios realizar compras de
productos agrícolas ofrecidos por la empresa. <br/>
      </p>
      <p className="text-gray-600 text-xs"> Febrero 2023 – Mayo 2023, Morelos, Zacatepec
 </p>
    </div>
  </div>
  
</div>
  

            </div>
        
      </section>
    )
}