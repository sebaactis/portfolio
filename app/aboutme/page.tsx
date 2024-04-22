import MoreAboutMe from '@/components/about/moreaboutme'
import Capabilities from '@/components/capabilities/capabilities'
import Experience from '@/components/experience/experience'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { bebasNeue, manrope } from '@/utils/fonts'
import { ArrowDown, Github, LinkedinIcon } from 'lucide-react'

const PageAboutMe = () => {
  return (
    <>
      <MoreAboutMe />
      <Separator className="dark:bg-gray-500" />
      <Capabilities />
      <Separator className="dark:bg-gray-500" />
      <Experience />
    </>
  )
}

export default PageAboutMe
