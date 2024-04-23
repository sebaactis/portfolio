import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from "@/components/mode-toggle";
import { useLanguage } from '@/hooks/useLanguage';

const ButtonsFixed = () => {

    const { changeLanguage } = useLanguage();

    return (
        <div className="flex flex-col w-10 ml-10 fixed">
            <ModeToggle />
            <Button onClick={changeLanguage}> Cambiar lenguaje </Button>
        </div>
    )
}

export default ButtonsFixed