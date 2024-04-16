import { bebasNeue, manrope } from '@/utils/fonts';
import React from 'react'
import ProyectCard from './proyectCard';

const Proyects = () => {
    return (
        <section className="h-[90rem] mt-14 md:mt-0">
            <div className="flex flex-col md:ml-[23rem] mx-5 md:mx-0 md:mt-20">
                <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> FEATURED PROYECTS.</h2>
                <p className={`${manrope.className} font-light mt-4 md:w-96 md:mt-0`}>Here are some of the selected projects that showcase my passion for front-end development.</p>
            </div>
            <div>
                <ProyectCard />
                <ProyectCard />
            </div>
        </section>
    )
}

export default Proyects;