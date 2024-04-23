"use client"

import AboutMe from "@/components/about/aboutme";
import ButtonsFixed from "@/components/buttonsFixed";
import Presentation from "@/components/presentation/presentation";
import Proyects from "@/components/proyects/proyects";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  return (
    <>
      <div className="hidden md:block">
        <ButtonsFixed />
      </div>
      <main>
        <Presentation />
        <Separator className="dark:bg-gray-500" />
        <Proyects />
        <Separator className="dark:bg-gray-500" />
        <AboutMe />
      </main>
    </>
  );
}
