"use client"

import MoreAboutMe from '@/components/about/moreaboutme'
import ButtonsFixed from '@/components/buttonsFixed'
import Capabilities from '@/components/capabilities/capabilities'
import Experience from '@/components/experience/experience'
import { Separator } from '@/components/ui/separator'

const PageAboutMe = () => {
  return (
    <>
      <div className="hidden md:block">
        <ButtonsFixed />
      </div>
      <MoreAboutMe />
      <Separator className="dark:bg-gray-500" />
      <Capabilities />
      <Separator className="dark:bg-gray-500" />
      <Experience />
    </>
  )
}

export default PageAboutMe
