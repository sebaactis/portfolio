import { useLanguage } from '@/hooks/useLanguage';
import { bebasNeue, manrope500 } from '@/utils/fonts'
import CapabilityItem from './capabilityItem';

const Capabilities = () => {

    const { language } = useLanguage();

    const capabilities = ["HTML", "CSS", "JAVASCRIPT", "REACT", "TYPESCRIPT", "C#", "NEXT JS", "ASTRO", "TAILWIND CSS", "BOOTSTRAP", "NODE JS", "DOCKER", "POSTMAN", "SQL", "MONGODB", "FIREBASE", "PRISMA", "SUPABASE"]

    return (
        <section className="flex flex-col md:flex-row ml-6 md:ml-36 2xl:ml-72 gap-10 md:gap-40 mt-20 mb-20">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> {language ? "MY CAPABILITIES." : "MIS CAPACIDADES."}</h2>
            </div>
            <div className="flex flex-col w-[20rem] md:w-[40rem] gap-10">
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
                            <CapabilityItem key={capability} capability={capability} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Capabilities