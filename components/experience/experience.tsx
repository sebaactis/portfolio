import { bebasNeue } from '@/utils/fonts'
import ExperencieCard from './experencieCard'
import { useLanguage } from '@/hooks/useLanguage';

const Experience = () => {

    const { language } = useLanguage();

    return (
        <section id="aboutme" className="flex flex-col ml-6 mb-14 md:ml-36 2xl:ml-72 md:flex-row mt-20 gap-20 md:gap-52 md:mb-36">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> {language ? "MY EXPERIENCE" : "MI EXPERIENCIA"}</h2>
            </div>
            <div className="md:w-[33rem] md:ml-10 flex flex-col">
                <ExperencieCard
                    title={language ? "Freelance Developer" : "Desarrollador freelance"}
                    description={language ? "Realization of projects for real companies in the market, and personal projects using various front-end and back-end technologies" : "Realizacion de proyectos para empresas reales del mercado, y de proyectos personales utilizando diversas tecnologías del front-end y del back-end"}
                    period={language ? "Sept 2022 - Present" : "Sept 2022 - Presente"}
                />
            </div>
        </section>
    )
}

export default Experience