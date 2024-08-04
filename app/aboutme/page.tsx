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
        && <Button onClick={scrollToTop} variant="link" className="bg-green-700 hover:bg-green-500 text-white transition duration-300 fixed right-0 bottom-0 mr-3 mb-4 md:m-32 px-2 rounded-full">
          <ArrowUp />
        </Button>}

      <div className="hidden md:block">
        <ButtonsFixed />
      </div>
      <MoreAboutMe />
      <Separator className="dark:bg-gray-500 bg-black" />
      <Capabilities />
      <Separator className="dark:bg-gray-500 bg-black" />
      <Experience />
    </>
  )
}

export default PageAboutMe
