import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { manrope } from '@/utils/fonts'
import { Separator } from '../ui/separator'
import { ArrowUpRight, Github } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'

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

    const { language } = useLanguage();

    return (
        <motion.article
            className="flex md:flex-row flex-col mt-20 md:mt-24 gap-20 2xl:gap-36"
            initial={{ x: -800, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
        >
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
                    <h3 className="font-bold">{language ? "PROYECT INFO" : "INFORMACIÓN DEL PROYECTO"}</h3>
                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">{language ? "Year" : "Año"}</p>
                        <p>{year}</p>
                    </div>

                    <Separator className="dark:bg-gray-500" />
                    <div className="flex justify-between">
                        <p className="font-bold">{language ? "Role" : "Rol"}</p>
                        <p>{role}</p>
                    </div>
                    <Separator className="dark:bg-gray-500" />

                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col">
                        <div className="flex">
                            <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-bold" href={demo} target='_blank'>{language ? "LIVE DEMO" : "DEMO EN VIVO"}</a>
                            <ArrowUpRight className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
                        </div>
                        <div className="border border-indigo-600 dark:border-indigo-400">

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <a className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-bold" href={githubLink} target='_blank'>GITHUB</a>
                            <Github className="text-indigo-600 dark:text-indigo-400 font-bold underline" />
                        </div>
                        <div className="border border-indigo-600 dark:border-indigo-400 ">

                        </div>
                    </div>
                </div>
            </section>
        </motion.article>
    )
}

export default ProyectCard