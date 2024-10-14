"use client"


import { useEffect } from "react";

// FOR ANIMATE ON SCROLL LIBRARY
import  { init } from "aos";
import "aos/dist/aos.css"


 import { Detail } from "./detail";
import { Sidebar } from "./sideBar";
import MobileCard from "./mobile/card";
import MobileEducation from "./mobile/education";
import MobileExperience from "./mobile/experience";
import MobileSkill from "./mobile/skill";
import MobileProject from "./mobile/project";
import MobileContact from "./mobile/contact";





const  MainPage=()=> {
      
    // FOR USEEFFECT AOS
useEffect(()  => {
    AOS:init({
        once:false
    })
},[])

  return (
    <div>
      {/* mobile view */}
      <div className="overflow-x-hidden bg-slate-100 h-screen md:hidden ">
       
        {/* Card */}
        <MobileCard/>
        {/* Education */}
        <MobileEducation/>
        {/* Experience */}
        <MobileExperience/>
        {/* Skill  */}
        <MobileSkill/>
        {/* Project */}
        <MobileProject/>
        {/* Contact */}
        <MobileContact/>
      

      </div>

      {/* desktop view  */}
    <div className="hidden md:flex md:overflow-hidden md:h-screen bg-gray-400">

       {/* Sidebar */}
       <div className="w-1/5">
        <Sidebar/>
       </div>

        {/* Detail  */}
       <div className="w-full">
         <Detail/> 
       </div>
    </div>
    </div>
  )
}

export default MainPage
