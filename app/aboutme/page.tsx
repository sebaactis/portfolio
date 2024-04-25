"use client"

import MoreAboutMe from '@/components/about/moreaboutme'
import ButtonsFixed from '@/components/buttonsFixed'
import Capabilities from '@/components/capabilities/capabilities'
import Experience from '@/components/experience/experience'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import useScrollToTopButton from '@/hooks/useScrollToTop'
import { ArrowUp } from 'lucide-react'

const PageAboutMe = () => {

  const { showBackToTop, scrollToTop } = useScrollToTopButton(600);

  return (
    <>
      {showBackToTop
        && <Button onClick={scrollToTop} variant="ghost" className="bg-indigo-700 fixed right-0 bottom-0 m-32 px-3 rounded-full">
          <ArrowUp />
        </Button>}

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
