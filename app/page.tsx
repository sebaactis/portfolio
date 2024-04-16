import NavBar from "@/components/navbar/navbar";
import Presentation from "@/components/presentation/presentation";
import Proyects from "@/components/proyects/proyects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
    <NavBar />
    <main>
      <Presentation />
      <Separator />
      <Proyects />
    </main>
    </>
  );
}
