"use client"

import { bebasNeue, manrope } from '@/utils/fonts'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from "@/public/foto-perfil.png"
import { ArrowUpRight, Github, LinkedinIcon } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'


const Presentation = () => {

    const { language } = useLanguage();

    return (
        <div className="flex md:flex-row flex-col items-center h-[800px] ml-6 md:ml-36 2xl:ml-72 gap-20 md:gap-56">
            <div className="flex flex-col justify-center mt-5 md:mt-0">

                <motion.h2
                    className={`${bebasNeue.className} md:text-7xl text-6xl`}
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {language ? "HI, I AM" : "HOLA, YO SOY"}
                </motion.h2>
                <motion.h2
                    className={`${bebasNeue.className} md:text-7xl text-6xl`}
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                > 
                SEBASTIAN ACTIS.
                </motion.h2>
                <p className={`${manrope.className} font-light mt-5 md:w-96 md:mt-2`}>
                    {
                        language
                            ? "A developer with knowledge of front-end and back-end. Passionate about technology, always looking for new challenges and learning opportunities."
                            : "Un desarrollador con conocimientos en front-end y back-end. Apasionado por la tecnología, siempre buscando nuevos desafíos y oportunidades de aprendizaje."
                    }
                </p>

                <div className="flex gap-3 mt-10 items-center">
                    <a href="#contact">
                        <Button className="rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">{language ? "CONTACT ME" : "CONTACTARME"}
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