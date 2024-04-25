"use client"

import { FormEvent, useRef } from 'react';

import { bebasNeue, manrope400, manrope500, manrope800 } from '@/utils/fonts'
import { LinkedinIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { sendEmail } from '@/utils/emailHandler';
import { useLanguage } from '@/hooks/useLanguage';
import { GithubIcon, InstagramIcon, XIcon } from '@/utils/icons';

const Contact = () => {

    const { language } = useLanguage();
    const form = useRef(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        if (form.current !== null) {
            sendEmail(e, form.current)
        }
    }

    return (
        <section
            id="contact"
            className="flex md:flex-row flex-col gap-10 md:gap-0 mt-16 mb-10 ml-6 md:ml-36 2xl:ml-72">

            <article className="flex flex-col gap-7">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> {language ? "LETS CONNECT" : "CONECTEMOS"} </h2>
                <div className="flex flex-col gap-3">
                    <div className="flex">
                        <p className={`${manrope500.className} font-light mr-1`}>{language ? "Say hello at" : "Saluda a"}</p>
                        <div>
                            <p className={`${manrope500.className} font-light`}>sebaactis@gmail.com</p>
                            <div className="border border-indigo-600 dark:border-indigo-400">

                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <p className={`${manrope500.className} font-light mr-1`}>{language ? "For more info, here is my" : "Para más información, aquí está mi"}</p>
                        <div>
                            <a href="/aboutme"><p className={`${manrope500.className} font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300`}>{language ? "resume" : "resumen"}</p></a>
                            <div className="border border-indigo-600 dark:border-indigo-400" />
                        </div>
                    </div>

                </div>
                <div className="flex gap-6 items-center">
                    <a href="https://www.linkedin.com/in/sebastianactis/" target="_blank"><LinkedinIcon className="dark:text-indigo-500 hover:scale-110 transition duration-200" /></a>
                    <a className="dark:text-indigo-500 hover:scale-110 transition duration-200" href="https://github.com/sebaactis" target="_blank"><GithubIcon /></a>
                    <a className="dark:text-indigo-500 hover:scale-110 transition duration-200" href="https://twitter.com/sebaactis" target="_blank"><XIcon /></a>
                    <a className="dark:text-indigo-500 hover:scale-110 transition duration-200" href="https://instagram.com/sebaactis" target="_blank"><InstagramIcon /></a>
                </div>

            </article>
            <form ref={form} onSubmit={handleSubmit} className={`${manrope800.className} md:ml-80 flex flex-col gap-6`}>
                <Label htmlFor="name">{language ? "Name" : "Nombre"}</Label>
                <Input required className="w-[20rem] md:w-[30rem]" type="text" id="user_name" name="user_name" />
                <Label htmlFor="email">{language ? "Email" : "Correo"}</Label>
                <Input required className="w-[20rem] md:w-[30rem]" type="email" id="user_email" name="user_email" />
                <Label htmlFor="subject">{language ? "Subject" : "Motivo"}</Label>
                <Input required className="w-[20rem] md:w-[30rem]" type="text" id="subject" name="subject" />
                <Label htmlFor="message">{language ? "Message" : "Mensaje"}</Label>
                <Textarea required className="w-[20rem] md:w-[30rem]" id="message" name="message" />
                <Button type="submit" className="w-[20rem] md:w-[30rem] rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">{language ? "SUBMIT" : "ENVIAR"}
                </Button>
            </form>

        </section>
    )
}

export default Contact
