
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/component/ui/card";
import { School } from "lucide-react";



const Education = () => {

  // My Education here
  let education = [
    {
      schoolName : "Memon Education Board ",
      date: "12 Jun 2024",
      field:"Commerce",
      detail:"Matriculation from [MEB], [2024] with [Percentage/69%].",
    },
    {
      schoolName : "GOVT. COLLEGE OF COMMERCE AND ECONOMICS NO 2 in Commerce. ",
      date: "12 Sep 2025",
      field:"Commerce",
      detail:" Govt. College of Commerce and Economics No. 2, [2024] - [2026], Commerce Stream.",
    },
 
  ]








  return (
    <div>
      <Card   data-aos="zoom-in" className="h-[85vh]  overflow-y-auto bg-slate-200 ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight uppercase">Education</CardTitle>
          
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="-my-8 divide-y-2 divide-gray-100">
           
            {education.map((iteam,i)=>(
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
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
                
              </div>
            </div>
            ))}
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;




