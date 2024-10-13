import React from 'react'

const MobileExperience = () => {
  
  // My Education here
  let experience = [
    {
      skill: "Web Designer",
      
      field:"Fronted Developer",
      detail:"Fronted developer with experience of different projects in building responsive, user-friendly web applications using html , css , javascript , performance, optimization, and coss-browser compatibility.",
    },
    {
      skill : "Techical Project Experience",
      
      field:"Fronted  Developer",
      detail:"Developer  and deliverd numerous web projects using html , css , javascript , next.js.Demonstrated expertise in creating responsive and interactive web applications that meet user needs and business objectives.",
    },
 
  ]
  return (
    <div className='w-full p-5 mt-20'>

<h2 className='scroll-m-20 border-b border-gray-600  pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Experience</h2>



            <div className="mt-4 divide-y-2 divide-blue-500">
           
           {experience.map((iteam,i)=>(
             <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
             <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
               <span className="font-semibold title-font text-gray-700">
                  {iteam.field}
               </span>
               {/* <span className="mt-1 text-gray-500 text-sm">{iteam.date}</span> */}
             </div>
             <div className="md:flex-grow">
               <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                 {iteam.skill}
               </h2>
               <p className="leading-relaxed">
               {iteam.detail}

               </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                 Learn More
                 <svg
                   className="w-4 h-4 ml-2"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={2}
                   fill="none"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 12h14" />
                   <path d="M12 5l7 7-7 7" />
                 </svg>
               </a> 
             </div>
           </div>
           ))}
           
         </div>
    </div>
  )
}

export default MobileExperience
