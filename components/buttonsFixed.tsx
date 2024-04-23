import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from '@/hooks/useLanguage';

const ButtonsFixed = () => {

    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex flex-col w-10 mt-5 ml-10 fixed gap-1">
            <ModeToggle />
            <Button variant="ghost" className="text-md" onClick={changeLanguage}> {language ? "ESP" : "ENG"}  </Button>
        </div>
    )
}

export default ButtonsFixed