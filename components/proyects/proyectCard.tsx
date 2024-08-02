import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { manrope400, manrope800 } from '@/utils/fonts'
import { Separator } from '../ui/separator'
import { ArrowUpRight, Github } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { GithubIconSmall } from '@/utils/icons'

interface ProyectCardProps {
    src: StaticImageData,
    title: string,
    description: string,
    year: number,
    role: string
    demo: string,
    githubLink: string
    techData: string[]
}

const technologies = [
    {name: "REACT", color: "blue"},
    {name: "NODE", color: "green"},
    {name: "ASTRO", color: "indigo"},
    {name: "NEXT", color: "slate"},
    {name: "CSS", color: "cyan"},
    {name: "HTML", color: "orange"},
    {name: "JS", color: "yellow"},
    {name: "PRISMA", color: "gray"},
    {name: "C#", color: "violet"},
    {name: "ENTITY FRAMEWORK", color: "lime"},
    {name: "SUPABASE", color: "emerald"},
    {name: "SQL", color: "stone"},
    {name: "MONGO", color: "teal"},
    {name: "FIREBASE", color: "amber"}
]


const ProyectCard = ({ src, title, description, year, role, demo, githubLink, techData }: ProyectCardProps) => {

    const { language } = useLanguage();

    return (

        <motion.article
            className="flex md:flex-row flex-col mt-20 md:mt-24 gap-20 2xl:gap-36"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
        >
            <section className="">
                <div className=" bg-[#bebebead] dark:bg-[#31313128] w-[21rem] h-[21rem] md:w-[32.5rem] md:h-[32.5rem] flex items-center justify-center rounded-md">
                    <Image
                        src={src}
                        alt="foto perfil"
                        className=" w-[18rem] h-[18rem] md:w-[27.875rem] md:h-[27.875rem] rounded-md"
                    >
                    </Image>
                </div>
            </section>
            <section className="flex flex-col mx-5 md:mx-0 gap-14 mb-5">
                <div className="flex flex-col gap-3">
                    <h2 className={`${manrope800.className} md:text-2xl text-xl font-bold`}>{title} </h2>
                    <p className={`${manrope400.className} text-base font-light mt-4 md:w-[34rem] md:mt-0`}>{description}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold">{language ? "PROYECT INFO" : "INFORMACIÓN DEL PROYECTO"}</h3>
                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className={`${manrope800.className} font-bold`}>{language ? "Year" : "Año"}</p>
                        <p>{year}</p>
                    </div>

                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between gap-[5.3rem] text-pretty md:gap-0">
                        <p className={`${manrope800.className} font-bold`}>{language ? "Role" : "Rol"}</p>
                        <p>{role}</p>
                    </div>
                    <Separator className="dark:bg-gray-500" />

                    <div className="flex justify-between gap-[1.5rem] text-pretty md:gap-0">
                        <p className={`${manrope800.className} font-bold`}>{language ? "Technologies" : "Tecnologias"}</p>
                        <div className="flex flex-wrap gap-2">
                            {techData.map(tech => {
                                return (
                                    <p key={tech} className={`bg-${technologies.find(t => t.name === tech)?.color}-500 p-1.5 rounded-md text-xs font-bold`}>{technologies.find(t => t.name === tech)?.name}</p>
                                )
                            })}
                        </div>

                    </div>

                </div>
                <div className={`flex ${demo === "" ? "" : "gap-4"}`}>
                    <div className="flex flex-col">
                        {demo === "" ? "" : <><div className="flex">
                            <a className={`${manrope800.className} text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 font-bold transition duration-300`}
                                href={demo} target='_blank'>{language ? "LIVE DEMO" : "DEMO EN VIVO"}</a>
                            <ArrowUpRight className="text-green-600 dark:text-green-400 font-bold underline" />
                        </div>
                            <div className="border border-green-600 dark:border-green-400">

                            </div> </>}

                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <a className={`${manrope800.className} text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 font-bold transition duration-300`} href={githubLink} target='_blank'>GITHUB</a>
                            <div className="dark:text-green-400 text-green-600">
                                <GithubIconSmall />
                            </div>
                        </div>
                        <div className="border border-green-600 dark:border-green-400 ">

                        </div>
                    </div>
                </div>
            </section>
        </motion.article>
    )
}

export default ProyectCard