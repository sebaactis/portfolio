import React from 'react'
import Photo from "@/public/foto-perfil.png"
import Image from 'next/image'
import { manrope } from '@/utils/fonts'
import { Separator } from '../ui/separator'
import { ArrowUpRight, GitBranchPlus } from 'lucide-react'

const ProyectCard = () => {
    return (
        <article className="flex md:flex-row flex-col justify-center items-center mt-20 md:mt-24 md:ml-10 gap-20 md:gap-60">
            <section>
                <div className="bg-[#9e9e9e14] dark:bg-[#313131] w-[21rem] h-[21rem] md:w-[32.5rem] md:h-[32.5rem] flex items-center justify-center rounded-md">
                    <Image
                        src={Photo}
                        alt="foto perfil"
                        className=" w-[10rem] h-[10rem] md:w-[26.875rem] md:h-[21.875rem] rounded-md"
                    >
                    </Image>
                </div>
            </section>
            <section className="flex flex-col mx-5 md:mx-0 gap-14 mb-5">
                <div className="flex flex-col gap-3">
                    <h2 className={`${manrope.className} md:text-xl text-xl font-bold`}>Promotional landing page for our favorite show </h2>
                    <p className={`${manrope.className} text-sm font-light mt-4 md:w-96 md:mt-0`}>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold">PROYECT INFO</h3>
                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">Year</p>
                        <p>2023</p>
                    </div>

                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">Role</p>
                        <p>Front-End</p>
                    </div>
                    <Separator className="dark:bg-gray-500" />

                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <div className="flex">
                            <a className=" text-indigo-600 dark:text-indigo-400 font-bold" href="">LIVE DEMO</a>
                            <ArrowUpRight className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
                        </div>
                        <div className="border border-indigo-600 dark:border-indigo-400">

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <a className="text-indigo-600 dark:text-indigo-400 font-bold" href="">GITHUB</a>
                            <GitBranchPlus className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
                        </div>
                        <div className="border border-indigo-600 dark:border-indigo-400 ">

                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default ProyectCard