import { useState } from "react"

import SubHeading from "@/components/subHeading"
import TextReveal from "@/components/textReveal"

import { projects } from "@/helpers/projects"

export default function ProjectsNav() {
  const [hovered, setHovered] = useState(false);
  const [current, setCurrent] = useState(null);
  
  function handleHover(e) {
    setHovered(true)
    setCurrent(e)
  }

  function handleHoverLeave(e) {
    setHovered(false)
    setCurrent(null)
  }

  return (
    <nav className="relative" id="projects">
      <SubHeading className="mb-0 py-3 border-t border-white/30">Some projects I&rsquo;m super proud of</SubHeading>

      <ul className="border-t border-white/30 md:[&>li:nth-child(2)>a>span:nth-child(2)]:translate-x-[-12vw] md:[&>li:nth-child(3)>a>span:nth-child(2)]:translate-x-[-2vw] md:[&>li:nth-child(4)>a>span:nth-child(2)]:translate-x-[7vw] md:[&>li:nth-child(6)>a>span:nth-child(2)]:translate-x-[-10vw]">
        {projects.map((e, i) => {
          let innerState = 'lg:opacity-100'
          
          hovered && (
            innerState = 'lg:opacity-[0.075]'
          )
          
          i == current && (
            innerState = 'lg:opacity-100'
          )

          return (
            <li className="block relative" key={i}>
              <a onMouseEnter={()=> handleHover(i)} onMouseLeave={()=>handleHoverLeave()} href={e.url} target="_blank" rel="noopener noreferrer" className={`uppercase border-b border-white/30 w-full pt-[10px] pb-2 md:py-3 block md:flex items-end justify-center relative group a11y-focus`} aria-label={`Navigate externally to the ${e.title} project`}>
                <span className={`hidden md:block font-serif italic text-[2.5vw]/[1] lg:text-[2vw]/[1] tracking-normal translate-y-[2px] overflow-hidden transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] absolute md:bottom-3 left-0 ${innerState}`}>
                  <TextReveal>{i < 9 && ('0')}{i+1}</TextReveal>
                </span>

                <span className="block overflow-hidden mx-auto text-center">
                  <span className={`block text-[7vw]/[0.95] md:text-[5.5vw]/[0.95] lg:text-[5vw]/[0.95] font-display tracking-tight transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                    <TextReveal>
                      <span className="block will-change-transform transition-transform ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] md:group-hover:translate-y-[-120%]">{e.title}</span>
                      <span className="block will-change-transform transition-transform ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] absolute inset-0 translate-y-[120%] md:group-hover:translate-y-0" aria-hidden={true}>{e.title}</span>
                    </TextReveal>
                  </span>
                </span>
                
                <span className={`text-center md:text-right font-mono text-[9px]/[1] md:text-[10px]/[1] tracking-tight block overflow-hidden transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] md:absolute md:bottom-4 md:right-0 mt-[5px] md:mt-0 ${innerState}`}>
                  <TextReveal>{e.year}</TextReveal>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}