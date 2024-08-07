"use client"

import AboutMe from "@/components/about/aboutme";
import ButtonsFixed from "@/components/buttonsFixed";
import Presentation from "@/components/presentation/presentation";
import Proyects from "@/components/proyects/proyects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useScrollToTopButton from "@/hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";

export default function Home() {

  const { showBackToTop, scrollToTop } = useScrollToTopButton(1400);

  return (
    <>
      {showBackToTop
        && <Button onClick={scrollToTop} variant="link" className="bg-green-700 hover:bg-green-500 transition duration-300 text-white fixed right-0 bottom-0 mr-3 mb-4 md:m-32 px-2 rounded-full">
          <ArrowUp />
        </Button>}

      <div className="hidden md:block">
        <ButtonsFixed />
      </div>

      <main>
        <Presentation />
        <Separator className="dark:bg-gray-500 bg-black" />
        <Proyects />
        <Separator className="dark:bg-gray-500 bg-black" />
        <AboutMe />
      </main>
    </>
  );
}
