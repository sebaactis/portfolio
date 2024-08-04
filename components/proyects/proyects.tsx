import { bebasNeue, manrope400 } from '@/utils/fonts';
import React from 'react'
import ProyectCard from './proyectCard';
import wotalentpreview from "@/public/wotalent-preview.png"
import hamburguepediapreview from "@/public/hamburguepedia-preview.png"
import ficsorpreview from "@/public/ficsor-preview.png"
import windenpreview from "@/public/winden-preview.png"
import apinet from "@/public/netapi.png"
import jsapi from "@/public/jsapi.png"
import hospitality from "@/public/hospitality.png"
import { useLanguage } from '@/hooks/useLanguage';

const Proyects = () => {

    const { language } = useLanguage();

    return (
        <section id="proyects" className="ml-6 md:ml-36 2xl:ml-72 mt-14 md:mt-0 mb-20">
            <div className="flex flex-col md:mx-0 md:mt-20 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-5xl`}> {language ? "FEATURED PROYECTS." : "PROYECTOS DESTACADOS."}</h2>
                <p className={`${manrope400.className} font-light mt-4 md:w-96 md:mt-0`}>
                    {
                        language
                            ? "These are some of the selected projects that show my passion for development. You will find more projects in my "
                            : "Estos son algunos de los proyectos seleccionados que muestran mi pasión por el desarrollo. Encontrarás mas proyectos en mi "
                    }
                    <a className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition font-bold" href="https://github.com/sebaactis?tab=repositories" target="_blank">github</a>
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
                    demo='https://wotalent.netlify.app/'
                    githubLink='https://github.com/sebaactis/wotalent'
                    techData={["JS","REACT", "NODE", "MONGO"]}
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
                    techData={["JS", "REACT", "FIREBASE"]}
                />
                <ProyectCard
                    src={jsapi}
                    title={language ? "JS API Shop Cart" : "API Carrito de compras con JS"}
                    description={
                        language
                            ? "API that implements a shopping cart in Javascript language. This project was part of the final project for the Corderhouse backend course. It has endpoints for products, users, security via jwt, roles, data validation, testing with chia, using containers with Docker, among other features."
                            : "API que implementa un carrito de compras en lenguaje Javascript. Este proyecto formo parte del proyecto final para el curso de backend de Corderhouse. Cuenta con endpoints para productos, usuarios, seguridad via jwt, roles, validacion de datos, testing con chia, uso de contenedores con Docker, entre otras caracteristicas."
                    }
                    year={2023}
                    role='Back End Developer'
                    demo=''
                    githubLink='https://github.com/sebaactis/backend-coderhouse'
                    techData={["JS", "NODE", "MONGO", ]}
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
                    techData={["JS", "REACT"]}
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
                    techData={["HTML", "CSS"]}
                />
                <ProyectCard
                    src={hospitality}
                    title='Hospitality'
                    description={
                        language
                            ? "Management system for medical appointments. It has appointment, staff and patient management among other functionalities. It has its own API in Supabase and managed with Prisma ORM."
                            : "Sistema de gestión para citas medicas. Cuenta con administracion de citas, personal y pacientes entre otras funcionalidades. Cuenta con su propia API en Supabase y gestionada con Prisma ORM"
                    }
                    year={2024}
                    role='Front End Developer'
                    demo='https://windenvelas.netlify.app/'
                    githubLink='https://github.com/sebaactis/citas-medicas'
                    techData={["JS", "REACT", "ASTRO", "PRISMA", "SQL"]}
                />
                <ProyectCard
                    src={apinet}
                    title={language ? ".NET API Shop Cart" : "API Carrito de compras en .NET"}
                    description={
                        language
                            ? "API to implement a shopping cart in C# language. It has the process of adding products to the cart, finalizing the purchase with an issuance of an order, and authentication of users and roles."
                            : "API para implementar un carrito de compras en lenguaje C#. Cuenta con el proceso de agregar productos al carrito, finalizar la compra con una emision de una orden, y una autenticacion de usuarios y roles."
                    }
                    year={2024}
                    role='Back End Developer'
                    demo=''
                    githubLink='https://github.com/sebaactis/CarritoDeCompras.NET'
                    techData={["C#", "ENTITY FRAMEWORK", "SQL"]}
                />
            </div>
        </section>
    )
}

export default Proyects;