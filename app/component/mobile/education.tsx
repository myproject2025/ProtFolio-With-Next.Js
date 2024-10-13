import React from 'react'

const MobileEducation = () => {
  
  // My Education here
  let education = [
    {
      schoolName : "Memon Education Board ",
      date: "12 Jun 2024",
      field:"Commerce",
      detail:" Matriculation from [MEB], [2024] with [Percentage/69%].",
    },
    {
      schoolName : "GOVT. COLLEGE OF COMMERCE AND ECONOMICS NO 2 in COMMERCE. ",
      date: "12 Sep 2024",
      field:"Commerce",
      detail:"Govt. College of Commerce and Economics No. 2, [2024] - [2026], Commerce Stream.",
    },
 
  ]

  return (
    <div className='w-full p-5 mt-20'>
         <h2 className='scroll-m-20 border-b border-gray-600  pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Education</h2>
         <div className=" divide-y-2 divide-blue-500">

           
           {education.map((iteam,i)=>(
             <div key={i} className="py-5 flex flex-wrap md:flex-nowrap">
             <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
               <span className="font-semibold title-font text-slate-800">
                  {iteam.field}
               </span>
               <span className="mt-1 text-gray-500 text-sm">{iteam.date}</span>
             </div>
             <div className="md:flex-grow">
               <h2 className="text-2xl font-medium text-slate-600 title-font mb-2">
                 {iteam.schoolName}
               </h2>
               <p className="leading-relaxed">
               {iteam.detail}

               </p>
               {/* <a className="text-indigo-500 inline-flex items-center mt-4">
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
               </a> */}
             </div>
           </div>
           ))}
           
         </div>
    </div>
  )
}



export default MobileEducation
