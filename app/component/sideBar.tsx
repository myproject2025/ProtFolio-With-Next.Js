
import { Button } from "@/app/component/ui/button";
import Image from "next/image";

import Typewriter from 'typewriter-effect';

// Icon  linkedin
import { FaLinkedin } from "react-icons/fa6";

// Icon Github
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

// Icon Download
import { FaCloudDownloadAlt } from "react-icons/fa";


export function Sidebar() {
  return (
     <div className="flex flex-col items-center justify-center align-middle p-3 h-full bg-gradient-to-tl from-zinc-600" >
    {/* Image */}
    <Image src="/assets/profile.jpg" alt="profile-picture" width={1000} height={1000} className="rounded-md"/>
    {/* Name here */}
    <div className="mt-3">
    <h1 className="text-2xl font-bold tracking-tight uppercase">Ali  Asghar</h1>
    <h2 className="text-lg text-center font-semibold tracking-tight text-white">
    <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/></h2>
    </div>
    {/* Social Media Account */}
    <div className="mt-2 grid grid-cols-3 gap-4 ml-11">

      {/* Linkedin */}
        <div className="mt-2 ">
       <Link href="https://www.linkedin.com/in/ali-asghar-m-rizwan-a27679300/" target="_blank" className="text-blue-700">
      <FaLinkedin className="text-4xl  "/>
      </Link>
      </div>

      {/* Github */}
      <div className="mt-2 ">
       <Link href="https://github.com/myproject2025" target="_blank" className="text-[#480aa5]">
      <FaGithubSquare className="text-4xl "/>
      </Link>
      </div>

     
    </div>
    {/* Download CV Button */}
    <Link href="/assets/cv/MY CV.pdf" className="mt-4" target="_blank">
    <Button>
    <FaCloudDownloadAlt className="mr-3 h-4 w-4"/> Download CV
    </Button> 
    </Link>

  
   </div>
  )
}