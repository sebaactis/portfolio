import Capabilities from '@/components/capabilities/capabilities'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { bebasNeue, manrope } from '@/utils/fonts'
import { ArrowDown, Github, LinkedinIcon } from 'lucide-react'

const PageAboutMe = () => {
  return (
    <>
      <section id="aboutme" className="flex flex-col ml-5 mb-20 md:ml-36 2xl:ml-60 md:flex-row mt-20 gap-20 md:gap-52 md:mb-60">
        <div className="flex flex-col md:mx-0 gap-2">
          <h2 className={`${bebasNeue.className} md:text-7xl text-4xl`}> ABOUT ME.</h2>
        </div>
        <div className="md:w-[44rem] 2xl:ml-20 md:ml-10 flex flex-col gap-8">
          <h2 className={`${manrope.className} md:text-2xl text-xl font-bold`}> I am a front-end developer based in Sydney. Has Mechanical Engineering background.  </h2>
          <p className="">I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill</p>
          <div className="flex gap-3 mt-10 items-center">
            <a href="#">
              <Button className="rounded-3xl py-6 px-5 text-black bg-indigo-400 hover:bg-indigo-400 dark:bg-indigo-400 dark:hover:bg-indigo-400 font-bold hover:scale-[1.02] text-md transition duration-150">DOWNLOAD CV
                <span className="bg-black rounded-full text-white dark:text-white p-2 ml-3 -mr-3">
                  <ArrowDown />
                </span>
              </Button>
            </a>

            <a href="https://github.com/sebaactis" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800">
              <Github className="text-white dark:text-indigo-400 font-bold" />
            </a>

            <a href="https://www.linkedin.com/in/sebastianactis/" target="_blank" className="transition duration-500 rounded-full py-3 px-3 ml-1 bg-indigo-600 dark:bg-[#222222] dark:hover:bg-gray-800">
              <LinkedinIcon className="text-white dark:text-indigo-400 font-bold" />
            </a>
          </div>

        </div>
      </section>
      <Separator className="dark:bg-gray-500" />
      <Capabilities />
    </>
  )
}

export default PageAboutMe
