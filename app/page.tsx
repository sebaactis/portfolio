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
        && <Button onClick={scrollToTop} variant="ghost" className="bg-indigo-700 fixed right-0 bottom-0 mr-2 mb-2 md:m-32 px-2 rounded-full">
          <ArrowUp />
        </Button>}

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
