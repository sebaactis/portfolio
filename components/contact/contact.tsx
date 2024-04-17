import { bebasNeue, manrope } from '@/utils/fonts'
import { Github, Instagram, LinkedinIcon, Twitter } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'

const Contact = () => {
    return (
        <section className="flex mt-16 mb-10 md:ml-72">
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
                    <Github className="text-indigo-500" />
                    <Twitter className="text-indigo-500" />
                    <Instagram className="text-indigo-500" />
                </div>

            </article>
            <form className="md:ml-80 flex flex-col gap-5">
                <Label htmlFor="name">Name</Label>
                <Input className="md:w-[30rem]" type="text" id="name" />
                <Label htmlFor="email">Email</Label>
                <Input className="md:w-[30rem]" type="email" id="email" />
                <Label htmlFor="subject">Subject</Label>
                <Input className="md:w-[30rem]" type="text" id="subject" />
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
                <Button className="rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">SUBMIT

                </Button>
            </form>
        </section>

    )
}

export default Contact
