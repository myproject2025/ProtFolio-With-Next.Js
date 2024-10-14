
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";
import { link } from "fs";
import { School } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';




const Project = () => {




  let  projects =[
    {
      name:"Resume Builder ",
      detail:"An advanced CV/Resume Builder tool that enables users to create and customize professional CVs/Resumes with ease.",
      link:"https://resume-project-henna.vercel.app/",
      image:"resume.png"
    },
    {
      name:"Clock ",
      detail:"A simple and accurate digital clock displaying the current time, built using [technology used]",
      link:"https://simple-digital-clock-lovat.vercel.app/",
      image:"clock.png"
    },
    {
      name:"PortFolio",
      detail:"A showcase of my projects, skills, and experiences that highlight my professional journey",
      link:"https://personal-port-folio.vercel.app/",
      image:"protfolio.png"
    },
    {
      name:"Simple Calculator ",
      detail:"A basic and intuitive calculator application that performs arithmetic operations, allowing users to easily calculate numbers.",
      link:"https://calculator-project-orpin.vercel.app/",
      image:"simpleCalculator.png"
    },
    {
      name:"Tic Tac Toe Game ",
      detail:"A classic and engaging Tic Tac Toe game built with [technology used], allowing two players to compete against each other. The game features a simple and intuitive interface, ensuring a seamless user experience",
      link:"https://tic-tac-toe-hn19.vercel.app/",
      image:"tictactoe.png"
    },
    {
      name:"Age Calculator ",
      detail:"A simple and interactive Age Calculator application that calculates a user's age based on their birth date and current date. It features a user-friendly interface and accurate calculations.",
      link:"https://age-calculator-lilac-kappa.vercel.app/",
      image:"ageCalculator.png"
    },
  ]






  return (
    <div>
      <Card   data-aos="zoom-in" className="h-[85vh]  overflow-y-auto  bg-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Project</CardTitle>
          
        </CardHeader>
        <CardContent className="space-y-2">
        
    <div className="flex flex-wrap -m-4">
      {/* my project here */}
      {projects.map((item,i)=>(

      <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-64">
          
          <Image
            alt="gallery"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={`/assets/project/${item.image}`}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white  opacity-0 hover:opacity-100 cursor-pointer duration-300">
           
            <h2 className="text-lg font-semibold tracking-tight">
              {item.name}
            </h2>
            <p className="mt-3 eading-relaxed line-clamp-3">
               {item.detail}
            </p>
            <Link href={item.link} target="_blank"  className="text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline">
           <p className="mt-3">View Project</p>
            </Link>
          </div>
        </div>
      </div>
      ))}
     
    </div>
 

        </CardContent>
      </Card>
    </div>
  );
};

export default Project;




