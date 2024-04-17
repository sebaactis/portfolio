import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { manrope } from '@/utils/fonts'
import { Separator } from '../ui/separator'
import { ArrowUpRight, GitBranchIcon, GitBranchPlus, Github } from 'lucide-react'

interface ProyectCardProps {
    src: StaticImageData,
    title: string,
    description: string,
    year: number,
    role: string
    demo: string,
    githubLink: string
}

const ProyectCard = ({ src, title, description, year, role, demo, githubLink }: ProyectCardProps) => {
    return (
        <article className="flex md:flex-row flex-col ml-6 md:ml-0 mt-20 md:mt-24 gap-20 md:gap-36">
            <section>
                <div className="bg-[#9e9e9e14] dark:bg-[#313131] w-[21rem] h-[21rem] md:w-[32.5rem] md:h-[32.5rem] flex items-center justify-center rounded-md">
                    <Image
                        src={src}
                        alt="foto perfil"
                        className=" w-[15rem] h-[15rem] md:w-[26.875rem] md:h-[26.875rem] rounded-md"

                    >
                    </Image>
                </div>
            </section>
            <section className="flex flex-col mx-5 md:mx-0 gap-14 mb-5">
                <div className="flex flex-col gap-3">
                    <h2 className={`${manrope.className} md:text-2xl text-xl font-bold`}>{title} </h2>
                    <p className={`${manrope.className} text-base font-light mt-4 md:w-[34rem] md:mt-0`}>{description}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold">PROYECT INFO</h3>
                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">Year</p>
                        <p>{year}</p>
                    </div>

                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">Role</p>
                        <p>{role}</p>
                    </div>
                    <Separator className="dark:bg-gray-500" />

                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <div className="flex">
                            <a className="text-indigo-600 dark:text-indigo-400 font-bold" href={demo} target='_blank'>LIVE DEMO</a>
                            <ArrowUpRight className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
                        </div>
                        <div className="border border-indigo-600 dark:border-indigo-400">

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <a className="text-indigo-600 dark:text-indigo-400 font-bold" href={githubLink} target='_blank'>GITHUB</a>
                            <Github className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
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