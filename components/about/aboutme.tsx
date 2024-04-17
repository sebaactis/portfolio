import { bebasNeue, manrope } from '@/utils/fonts'
import React from 'react'

const AboutMe = () => {
    return (
        <section id="aboutme" className="flex flex-col md:ml-72 md:flex-row mt-20 gap-20 md:gap-52 md:mb-36">
            <div className="flex flex-col md:mx-0 gap-2">
                <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> ABOUT ME.</h2>
            </div>
            <div className="md:w-[33rem] md:ml-10 flex flex-col gap-8">
                <h2 className={`${manrope.className} md:text-2xl text-xl font-bold`}> I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h2>
                <p className="">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
                <div >
                    <a className="text-indigo-600 dark:text-indigo-400 font-bold">MORE ABOUT ME</a>
                    <div className="border border-indigo-600 dark:border-indigo-400 w-[8.36rem]">

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe
