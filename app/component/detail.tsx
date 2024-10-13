import { Button } from "@/app/component/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/component/ui/tabs"
import Education from "./education"
import Skill from "./skill"
import Project from "./project"
import Experience from "./experience"
import Contact from "./contact"

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-4 ">
      {/* tabs trigher button */}
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="Experience">Experience</TabsTrigger>
        <TabsTrigger value="Skill">Skill</TabsTrigger>
        <TabsTrigger value="Project">Project</TabsTrigger>
        <TabsTrigger value="Contact">Contact</TabsTrigger>
      </TabsList>

      {/* tabs contact here */}
      {/* education */}
      <TabsContent value="education">
      <Education/>
      </TabsContent>


       {/* skills */}
    <TabsContent value="Skill">
        <Skill/>
    </TabsContent>


     {/* project */}
     <TabsContent value="Project">
       <Project/>
    </TabsContent>


    {/* experience */}
    <TabsContent value="Experience">
       <Experience/>
    </TabsContent>

        {/* Contact */}
        <TabsContent value="Contact">
       <Contact/>
    </TabsContent>
     
      </Tabs>
  )
}