import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavLink from "./navlink";
import { useLanguage } from "@/hooks/useLanguage";

export default function MobileToogle({
}) {

    const { language } = useLanguage();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 flex">
                <ul className={``}>
                    <NavLink label={language ? "Work" : "Trabajos"} href="#proyects" />
                    <NavLink label={language ? "About Me" : "Sobre Mi"} href="#aboutme" />
                    <NavLink label={language ? "Contact" : "Contacto"} href="#contact" />
                </ul>
            </SheetContent>
        </Sheet>
    )
}