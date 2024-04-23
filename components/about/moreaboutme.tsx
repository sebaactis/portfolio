import { bebasNeue, manrope } from '@/utils/fonts'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, LinkedinIcon } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'



const MoreAboutMe = () => {

    const { language } = useLanguage();

    return (
        <section id="aboutme" className="flex flex-col mb-20 ml-6 md:ml-36 2xl:ml-72 md:flex-row mt-20 gap-20 md:gap-52 md:mb-60">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> {language ? "ABOUT ME" : "SOBRE MI"}</h2>
            </div>
            <div className="md:w-[44rem] 2xl:ml-20 md:ml-10 flex flex-col gap-8">
                <h2 className={`${manrope.className} md:text-2xl text-xl font-bold`}>
                    {
                        language
                            ? "I am a developer living in Buenos Aires, Argentina."
                            : "Soy un desarrollador que vive en Buenos Aires, Argentina."
                    }  </h2>
                <p>
                    {
                        language
                            ? "I am a developer with knowledge of front-end and back-end, based in Buenos Aires, looking for interesting opportunities to learn and grow. I like to create personalized experiences for each person. Passionate and curious about problem solving. I currently specialize in the MERN stack but am exploring .NET technology. In my free time, I really like to listen to music and play some video games."
                            : "Soy un desarrollador con conocimientos en front-end y back-end, con sede en Buenos Aires, que busca oportunidades interesantes para aprender y crecer. Me gusta crear experiencias personalizadas para cada persona. Apasionado y curioso por la resolución de problemas. Actualmente me especializo en el stack MERN pero estoy explorando la tecnología .NET. En mis tiempos libres, me gusta mucho escuchar musica y jugar algunos videojuegos."
                    }
                </p>
                <div className="flex gap-3 mt-10 items-center">
                    <a href="/CVSebastianActis.pdf" download>
                        <Button className="rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">{language ? "DOWNLOAD CV" : "DESCARGAR CV"}
                            <span className="bg-black rounded-full text-white dark:text-white p-2 ml-3 -mr-3">
                                <ArrowDown />
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
        </section>
    )
}

export default MoreAboutMe