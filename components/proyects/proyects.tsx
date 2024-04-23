import { bebasNeue, manrope } from '@/utils/fonts';
import React from 'react'
import ProyectCard from './proyectCard';
import wotalentpreview from "@/public/wotalent-preview.png"
import hamburguepediapreview from "@/public/hamburguepedia-preview.png"
import ficsorpreview from "@/public/ficsor-preview.png"
import windenpreview from "@/public/winden-preview.png"
import { useLanguage } from '@/hooks/useLanguage';

const Proyects = () => {

    const { language } = useLanguage();

    return (
        <section id="proyects" className="ml-6 md:ml-36 2xl:ml-72 mt-14 md:mt-0 mb-20">
            <div className="flex flex-col mx-5 md:mx-0 md:mt-20 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> {language ? "FEATURED PROYECTS." : "PROYECTOS DESTACADOS."}</h2>
                <p className={`${manrope.className} font-light mt-4 md:w-96 md:mt-0`}>
                    {
                        language
                            ? "Here are some of the selected projects that showcase my passion for the development"
                            : "Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo."
                    }
                </p>
            </div>
            <div>
                <ProyectCard
                    src={wotalentpreview}
                    title='Wo Talent'
                    description={
                        language
                            ? "Website for employee recruitment. The website has its own back-end and its own administration panel to add, edit or delete job searches. Additionally, a contact form connected to a specific email box."
                            : "Sitio web para la contratación de empleados. El sitio web tiene su propio back-end y su propio panel de administración para agregar, editar o eliminar búsquedas de empleo. Además, un formulario de contacto conectado a una casilla de correo electrónico específica."
                    }
                    year={2023}
                    role='Front End Developer & Back End Developer'
                    demo='https://wotalent.com.ar'
                    githubLink='https://github.com/sebaactis/wotalent'
                />
                <ProyectCard
                    src={hamburguepediapreview}
                    title='Hamburguepedia'
                    description={
                        language
                            ? "Website dedicated to a hamburger ecommerce. It was part of the final project of the Coderhouse React course. Contains the shopping cart and purchase checkout logic."
                            : "Sitio web dedicado a un ecommerce de hamburguesas. Fue parte del proyecto final del curso Coderhouse React. Contiene el carrito de compras y la lógica de pago y compra."
                    }
                    year={2022}
                    role='Front End Developer'
                    demo='https://hamburguepedia.netlify.app/'
                    githubLink='https://github.com/sebaactis/reactjs-hamburguepedia'
                />
                <ProyectCard
                    src={ficsorpreview}
                    title='FicSor'
                    description={
                        language
                            ? "Website for a film festival for non-hearing people. It was part of a real project, carried out with a team of developers and designers. It is a static website with 3 sections with different information about the festival."
                            : "Sitio web para un festival de cine para personas no oyentes. Fue parte de un proyecto real, realizado con un equipo de desarrolladores y diseñadores. Es una web estática con 3 secciones con diferente información sobre el festival."
                    }
                    year={2023}
                    role='Front End Developer'
                    demo='https://ficsor.com.ar/'
                    githubLink='https://github.com/sebaactis/Ficsor'
                />
                <ProyectCard
                    src={windenpreview}
                    title='Winden Velas'
                    description={
                        language
                            ? "Website for an aromatic candle store. It has information about the business, products, location, and contact information of the owners."
                            : "Sitio web para tienda de velas aromáticas. Tiene información sobre el negocio, productos, ubicación e información de contacto de los propietarios."
                    }
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