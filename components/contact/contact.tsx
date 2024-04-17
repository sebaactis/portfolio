import { bebasNeue, manrope } from '@/utils/fonts'
import { Github, Instagram, LinkedinIcon, Twitter } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section className="flex justify-between md:ml-28 mt-16 mb-10">
            <article className="flex flex-col gap-6">
                <h2 className={`${bebasNeue.className} md:text-7xl text-6xl`}> LETS CONNECT </h2>
                <div className="flex flex-col gap-3">
                    <div className="flex">
                        <p className={`${manrope.className} font-light mt-4 md:mt-0 mr-1`}>Say hello at</p>
                        <div>
                            <p className={`${manrope.className} font-light`}>sebaactis@gmail.com</p>
                            <div className="border border-indigo-600 dark:border-indigo-400">

                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <p className={`${manrope.className} font-light mt-4 md:mt-0 mr-1`}>For more info, here is my</p>
                        <div>
                            <p className={`${manrope.className} font-light`}>resume</p>
                            <div className="border border-indigo-600 dark:border-indigo-400">

                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-5">
                    <LinkedinIcon className="text-indigo-500" />
                    <Github className="text-indigo-500"/>
                    <Twitter className="text-indigo-500"/>
                    <Instagram className="text-indigo-500"/>
                </div>

            </article>
            <article>
                Formulario TODO
            </article>
        </section>

    )
}

export default Contact
