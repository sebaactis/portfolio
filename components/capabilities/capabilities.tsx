import { bebasNeue } from '@/utils/fonts'
import React from 'react'

const Capabilities = () => {

    const capabilities = ["HTML", "CSS", "JAVASCRIPT", "REACT", "TYPESCRIPT", "C#", "NEXT JS", "ASTRO", "TAILWIND CSS", "BOOTSTRAP", "NODE JS", "DOCKER", "POSTMAN", "SQL", "MONGODB", "FIREBASE", "PRISMA", "SUPABASE"]

    return (
        <section className="flex flex-col md:flex-row ml-6 md:ml-36 2xl:ml-72 gap-10 md:gap-40 mt-20 mb-20">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> MY CAPABILITIES.</h2>
            </div>
            <div className="flex flex-col w-[20rem] md:w-[40rem] gap-10">
                <p className="">I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                <div className="flex md:w-[40rem] flex-wrap gap-3 md:gap-4">
                    {capabilities.map((capability) => {
                        return (
                            <div key={capability} className="border border-gray-600 hover:bg-indigo-500 transition transition-500 rounded-full w-max px-4 py-2 md:px-9 md:py-3 font-bold">
                                {capability}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Capabilities