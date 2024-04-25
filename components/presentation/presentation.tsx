"use client"

import { bebasNeue, manrope400, manrope800 } from '@/utils/fonts'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Photo from "@/public/foto-perfil.png"
import { ArrowUpRight, LinkedinIcon } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { GithubIcon, LinkedIdIcon } from '@/utils/icons'

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
                <motion.p
                    className={`${manrope400.className} font-light mt-5 md:w-96 md:mt-2`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {
                        language
                            ? "A developer with knowledge of front-end and back-end. Passionate about technology, always looking for new challenges and learning opportunities."
                            : "Un desarrollador con conocimientos en front-end y back-end. Apasionado por la tecnología, siempre buscando nuevos desafíos y oportunidades de aprendizaje."
                    }
                </motion.p>

                <motion.div
                    className="flex gap-3 mt-10 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Link smooth={true} duration={500} to="contact">
                        <Button className={`${manrope800.className} rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150`}>{language ? "CONTACT ME" : "CONTACTARME"}
                            <span className="bg-black rounded-full text-white dark:text-white p-2 ml-3 -mr-3">
                                <ArrowUpRight />
                            </span>
                        </Button>
                    </Link>

                    <a href="https://github.com/sebaactis" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800 hover:bg-indigo-500 dark:text-indigo-400 text-white">
                        <GithubIcon />
                    </a>

                    <a href="https://www.linkedin.com/in/sebastianactis/" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800 hover:bg-indigo-500 dark:text-indigo-400 text-white">
                        <LinkedIdIcon />
                    </a>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image
                    src={Photo}
                    alt="foto perfil"
                    className="w-[320px] h-[320px] md:w-[580px] md:h-[580px] rounded-full"
                >
                </Image>

            </motion.div>
        </div>
    )
}

export default Presentation