import { bebasNeue } from '@/utils/fonts'
import React from 'react'
import ExperencieCard from './experencieCard'

const Experience = () => {
    return (
        <section id="aboutme" className="flex flex-col ml-6 mb-14 md:ml-36 2xl:ml-72 md:flex-row mt-20 gap-20 md:gap-52 md:mb-36">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> MY EXPERIENCE</h2>
            </div>
            <div className="md:w-[33rem] md:ml-10 flex flex-col">
                <ExperencieCard
                    title="Freelance Developer"
                    description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    period="Sept 2022 - Present"
                />
            </div>
        </section>
    )
}

export default Experience