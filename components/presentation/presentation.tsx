import { bebasNeue, manrope } from '@/utils/fonts'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from "@/public/foto-perfil.png"
import { ArrowUpRight, Github, Linkedin, LinkedinIcon } from 'lucide-react'


const Presentation = () => {
    return (
        <div className="container flex md:flex-row flex-col w-full justify-around items-center h-[800px]">
            <div className="flex flex-col justify-center mt-5 md:mt-0">

                <h2 className={`${bebasNeue.className} md:text-7xl text-6xl`}> HI, I AM </h2>
                <h2 className={`${bebasNeue.className} md:text-7xl text-6xl`}> SEBASTIAN ACTIS.</h2>
                <p className={`${manrope.className} font-light mt-4 md:w-96 md:mt-0`}>A fullstack developer A fullstack developer A fullstack developer A fullstack developer</p>

                <div className="flex gap-3 mt-10 items-center">
                    <Button className="rounded-2xl p-[22px] bg-gradient-to-r text-black font-bold dark:text-white from-indigo-300 to-indigo-700 hover:scale-[1.02] text-md transition duration-150">CONTACT ME
                        <span className="bg-black rounded-full text-white dark:bg-white dark:text-black ml-3 p-[1px]">
                            <ArrowUpRight />
                        </span>
                    </Button>

                    <Button className="transition duration-500 rounded-full p-2 ml-1 bg-indigo-600 borde hover:bg-indigo-800  dark:hover:bg-indigo-300">
                        <Github className="text-white dark:text-indigo-900" />
                    </Button>

                    <Button className="transition duration-500 rounded-full p-2 ml-1 bg-indigo-600 borde hover:bg-indigo-800  dark:hover:bg-indigo-300">
                        <LinkedinIcon className="text-white dark:text-indigo-900" />
                    </Button>
                </div>
            </div>

            <Image
                src={Photo}
                alt="foto perfil"
                className="md:w-[580px] md:h-[580px] rounded-full"
            >
            </Image>
        </div>
    )
}

export default Presentation