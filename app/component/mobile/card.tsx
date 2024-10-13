
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

const MobileCard = () => {
  return (
    <div  className='h-[90vh]  flex flex-col items-center justify-center'>
     <div className="bg-slate-200 card glass w-80 p-5 flex flex-col justify-center items-center text-center">
  
    {/* image */}
    <Image src="/assets/profile.jpg" alt="profile-picture" width={1000} height={1000} className="rounded-md"/>
  
  <div className="card-body">
    <h1 className=" text-center text-3xl font-bold tracking-tight uppercase">Ali  Asghar</h1>
    <h2 className="text-lg text-center font-semibold tracking-tight text-blue-900">
    <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/></h2>

 {/* social media */}
 <div className="mt-2 grid grid-cols-3 gap-4 ml-11">

      {/* Linkedin */}
        <div className="mt-2 ">
       <Link href="https://www.linkedin.com/in/ali-asghar-m-rizwan-a27679300/" target="_blank" className="text-gray-600 hover:text-[#0762C8]">
      <FaLinkedin className="text-4xl "/>
      </Link>
      </div>

      {/* Github */}
      <div className="mt-2 ">
       <Link href="https://github.com/myproject2025" target="_blank" className="text-gray-600 hover:text-[#6e5494]">
      <FaGithubSquare className="text-4xl "/>
      </Link>
      </div>

     
    </div>
    {/* cv button */}
    <Link href="/assets/cv/MY CV.pdf" className="mt-4" target="_blank">
    <Button>
    <FaCloudDownloadAlt className="mr-3 h-4 w-4"/> Download CV
    </Button> 
    </Link>


  </div>
</div>
    </div>
  )
}

export default MobileCard
