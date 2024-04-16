import { bebasNeue, manrope } from '@/utils/fonts';
import React from 'react'
import ProyectCard from './proyectCard';
import wotalentpreview from "@/public/wotalent-preview.png"
import hamburguepediapreview from "@/public/hamburguepedia-preview.png"
import ficsorpreview from "@/public/ficsor-preview.png"
import windenpreview from "@/public/winden-preview.png"

const Proyects = () => {
    return (
        <section id="proyects" className="h-[90rem] mt-14 md:mt-0">
            <div className="flex flex-col md:ml-[23rem] mx-5 md:mx-0 md:mt-20 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> FEATURED PROYECTS.</h2>
                <p className={`${manrope.className} font-light mt-4 md:w-96 md:mt-0`}>Here are some of the selected projects that showcase my passion for front-end development.</p>
            </div>
            <div>
                <ProyectCard
                    src={wotalentpreview}
                    title='Wo Talent'
                    description='Website for employee recruitment. The website has its own back-end and its own administration panel to add, edit or delete job searches. Additionally, a contact form connected to a specific email box.'
                    year={2023}
                    role='Front End Developer & Back End Developer'
                    demo='https://wotalent.com.ar'
                    githubLink='https://github.com/sebaactis/wotalent'
                />
                <ProyectCard
                    src={hamburguepediapreview}
                    title='Hamburguepedia'
                    description='Website dedicated to a hamburger ecommerce. It was part of the final project of the Coderhouse React course. Contains the shopping cart and purchase checkout logic.'
                    year={2022}
                    role='Front End Developer'
                    demo='https://hamburguepedia.netlify.app/'
                    githubLink='https://github.com/sebaactis/reactjs-hamburguepedia'
                />
                <ProyectCard
                    src={ficsorpreview}
                    title='FicSor'
                    description='Website for a film festival for non-hearing people. It was part of a real project, carried out with a team of developers and designers. It is a static website with 3 sections with different information about the festival.'
                    year={2023}
                    role='Front End Developer'
                    demo='https://ficsor.com.ar/'
                    githubLink='https://github.com/sebaactis/Ficsor'
                />
                <ProyectCard
                    src={windenpreview}
                    title='Winden Velas'
                    description='Website for an aromatic candle store. It has information about the business, products, location, and contact information of the owners.'
                    year={2022}
                    role='Front End Developer'
                    demo='https://windenvelas.netlify.app/'
                    githubLink='https://github.com/sebaactis/Winden-velas-Proyecto-Final-Coderhouse'
                />
            </div>
        </section>
    )
}

export default Proyects;