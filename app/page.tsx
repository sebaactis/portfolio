import AboutMe from "@/components/about/aboutme";
import Contact from "@/components/contact/contact";
import Presentation from "@/components/presentation/presentation";
import Proyects from "@/components/proyects/proyects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <main>
        <Presentation />
        <Separator className="dark:bg-gray-500" />
        <Proyects />
        <Separator className="dark:bg-gray-500" />
        <AboutMe />
        <Separator className="dark:bg-gray-500" />
        <Contact />
      </main>
    </>
  );
}
