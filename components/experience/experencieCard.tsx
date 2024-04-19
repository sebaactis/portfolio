import React from 'react'
import ExperienceItem from './experienceItem'
import { manrope } from '@/utils/fonts'

interface ExperencieCardProps {
    title: string
    description: string
    period: string
}

const ExperencieCard = ({ title, description, period }: ExperencieCardProps) => {
    return (
        <div className="flex items-start">
            <ExperienceItem />
            <div className="flex flex-col ml-3 md:ml-10 gap-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h2 className={`${manrope.className} md:text-xl text-lg font-bold`}> {title} </h2>
                    <h4 className={`${manrope.className} font-extralight`}> {period}</h4>
                </div>
                <p className={`${manrope.className} text-base font-extralight mt-4 md:w-[34rem] md:mt-0`}>{description}</p>
            </div>
        </div>
    )
}

export default ExperencieCard