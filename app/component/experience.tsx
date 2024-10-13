import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";
import { School } from "lucide-react";



const Experience = () => {

  // My Education here
  let experience = [
    {
      skill : "Web Designer",
      
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
    <div>
      <Card   data-aos="zoom-in" className="h-[85vh]  overflow-y-auto  bg-slate-200">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Experience</CardTitle>
          
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="-my-8 divide-y-2 divide-gray-100">
           
            {experience.map((iteam,i)=>(
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
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
            
              </div>
            </div>
            ))}
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;




