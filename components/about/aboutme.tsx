import { useLanguage } from '@/hooks/useLanguage';
import { bebasNeue, manrope800, manrope500 } from '@/utils/fonts'

const AboutMe = () => {

    const { language } = useLanguage();

    return (
        <>
            <div id="aboutme"></div>
            <section className="flex flex-col ml-6 mb-14 md:ml-36 2xl:ml-72 md:flex-row mt-20 md:mt-40 gap-20 md:gap-52 md:mb-60">
                <div className="flex flex-col md:mx-0 gap-2">
                    <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> {language ? "ABOUT ME" : "SOBRE MI"}</h2>
                </div>
                <div className="md:w-[33rem] md:ml-40 flex flex-col gap-8">
                    <h2 className={`${manrope800.className} md:text-2xl text-xl font-bold`}>
                        {
                            language
                                ? "I am a developer living in Buenos Aires, Argentina."
                                : "Soy un desarrollador que vive en Buenos Aires, Argentina."
                        }
                    </h2>
                    <p className={`${manrope500.className} font-bold`}>
                        {
                            language
                                ? "I am a developer with knowledge of front-end and back-end, based in Buenos Aires, looking for interesting opportunities to learn and grow. I like to create personalized experiences for each person. Passionate and curious about problem solving. I currently specialize in the MERN stack but I am exploring .NET technology"
                                : "Soy un desarrollador con conocimientos en front-end y back-end, con sede en Buenos Aires, que busca oportunidades interesantes para aprender y crecer. Me gusta crear experiencias personalizadas para cada persona. Apasionado y curioso por la resolución de problemas. Actualmente me especializo en el stack MERN pero estoy explorando la tecnología .NET"
                        }
                    </p>
                    <div >
                        <a href="/aboutme" className={`${manrope800.className} transition duration-300 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 font-bold`}>{language ? "MORE ABOUT ME" : "MAS SOBRE MI"}</a>
                        <div className={`border border-green-600 dark:border-green-400 ${language ? "w-[8.36rem]" : "w-[7.36rem]"}`}>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe
