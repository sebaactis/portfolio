import { useLanguage } from '@/hooks/useLanguage';
import { bebasNeue, manrope500 } from '@/utils/fonts'
import CapabilityItem from './capabilityItem';
import {AstroIcon, BootstrapIcon, CSharpIcon, CssIcon, DockerIcon, FirebaseIcon, HtmlIcon, JavaIcon, JsIcon, MongoIcon, NextIcon, NodeIcon, ORMicon, PostmanIcon, PrismaIcon, ReactIcon, SQLIcon, SupabaseIcon, TailwindIcon, TsIcon} from './icons/Icons';

const Capabilities = () => {

    const { language } = useLanguage();


    const capabilities = [
        { name: "HTML", icon: <HtmlIcon />, color: "orange" },
        { name: "CSS", icon: <CssIcon />, color: "blue" },
        { name: "JAVASCRIPT", icon: <JsIcon /> , color: "yellow"},
        { name: "REACT", icon: <ReactIcon /> , color: "cyan"},
        { name: "TYPESCRIPT", icon: <TsIcon /> , color: "sky"},
        { name: "C#", icon: <CSharpIcon /> , color: "indigo"},
        { name: "NEXT JS", icon: <NextIcon /> , color: "gray"},
        { name: "ASTRO", icon: <AstroIcon /> , color: "violet"},
        { name: "TAILWIND", icon: <TailwindIcon /> , color: "orange"},
        { name: "BOOTSTRAP", icon: <BootstrapIcon /> , color: "purple"},
        { name: "NODE", icon: <NodeIcon /> , color: "green"},
        { name: "DOCKER", icon: <DockerIcon /> , color: "cyan"},
        { name: "POSTMAN", icon: <PostmanIcon /> , color: "orange"},
        { name: "MONGO", icon: <MongoIcon /> , color: "green"},
        { name: "FIREBASE", icon: <FirebaseIcon /> , color: "orange"},
        { name: "PRISMA", icon: <PrismaIcon /> , color: "gray"},
        { name: "SUPABASE", icon: <SupabaseIcon /> , color: "green"},
        { name: "SQL", icon: <SQLIcon /> , color: "gray"},
        { name: "JAVA", icon: <JavaIcon /> , color: "orange"},
        { name: "JPA", icon: <ORMicon /> , color: "orange"},
        { name: "ENTITY FRAMEWORK", icon: <ORMicon /> , color: "violet"},
    ]

    return (
        <section className="flex flex-col md:flex-row ml-6 md:ml-36 2xl:ml-72 gap-10 md:gap-40 mt-20 mb-20">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> {language ? "MY SKILLS." : "MIS HABILIDADES."}</h2>
            </div>
            <div  className="flex flex-col w-[20rem] md:w-[40rem] gap-10">
                <p className={`${manrope500.className}`}>
                    {
                        language
                            ? "These are my current capabilities. I always seek to perfect what I have learned, and continue expanding my library of knowledge."
                            : "Estas son mis capacidades actuales. Siempre busco perfeccionar lo aprendido, y seguir ampliando mi biblioteca de conocimientos."
                    }
                </p>
                <div className="flex md:w-[40rem] flex-wrap gap-3 md:gap-4">
                    {capabilities.map((capability) => {
                        return (
                            <CapabilityItem key={capability.name} capability={capability.name} icon={capability.icon} color={capability.color} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Capabilities