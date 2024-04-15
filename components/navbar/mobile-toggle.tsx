import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavLink from "./navlink";

export default function MobileToogle({

}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 flex">
                <ul className={``}>
                    <NavLink label="Work" />
                    <NavLink label="About Me" />
                    <NavLink label="Contact" />
                </ul>
            </SheetContent>
        </Sheet>
    )
}