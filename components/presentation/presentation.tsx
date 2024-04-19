import { bebasNeue, manrope } from '@/utils/fonts'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from "@/public/foto-perfil.png"
import { ArrowUpRight, Github, Linkedin, LinkedinIcon } from 'lucide-react'


const Presentation = () => {
    return (
        <div className="flex md:flex-row flex-col items-center h-[800px] ml-6 md:ml-36 2xl:ml-72 gap-20 md:gap-56">
            <div className="flex flex-col justify-center mt-5 md:mt-0">

                <h2 className={`${bebasNeue.className} md:text-7xl text-6xl`}> HI, I AM </h2>
                <h2 className={`${bebasNeue.className} md:text-7xl text-6xl`}> SEBASTIAN ACTIS.</h2>
                <p className={`${manrope.className} font-light mt-4 md:w-96 md:mt-0`}>A fullstack developer A fullstack developer A fullstack developer A fullstack developer</p>

                <div className="flex gap-3 mt-10 items-center">
                    <a href="#contact">
                        <Button className="rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">CONTACT ME
                            <span className="bg-black rounded-full text-white dark:text-white p-2 ml-3 -mr-3">
                                <ArrowUpRight />
                            </span>
                        </Button>
                    </a>

                    <a href="https://github.com/sebaactis" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800">
                        <Github className="text-white dark:text-indigo-400 font-bold" />
                    </a>

                    <a href="https://www.linkedin.com/in/sebastianactis/" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800">
                        <LinkedinIcon className="text-white dark:text-indigo-400 font-bold" />
                    </a>
                </div>
            </div>

            <Image
                src={Photo}
                alt="foto perfil"
                className="w-[320px] h-[320px] md:w-[580px] md:h-[580px] rounded-full"
            >
            </Image>
        </div>
    )
}

export default Presentation