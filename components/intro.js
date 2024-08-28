import { m } from 'framer-motion'
import CountUp from 'react-countup'

export default function Intro() {
  return (
    <m.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 w-full h-screen z-40"
    >
      <m.div
        className="w-full h-full flex flex-wrap items-center justify-center text-white bg-black relative" id="top"
      >
        <span className="flex overflow-hidden text-3xl lg:text-[39px] leading-none lg:leading-none relative z-[100]">
          {/* OUT ANIM - After a 1.5s delay (calculated by the initial translate reveal + countup timings) translate this text OUT on the Y axis to create a "un-reveal" style animation */}
          <m.span className="block" initial={{ y: '0'}} animate={{ y: '-120%' }} transition={{ duration: 1, delay: 1.5, ease: [0.83, 0, 0.17, 1] }}>
            {/* IN ANIM - Immediately translate this text IN on the Y axis to create a "reveal" style animation */}
            <m.span initial={{ y: '120%'}} animate={{ y: '0%' }} transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }} className="flex">
              <span className="">
                <span className="block">Sam Goddard </span>
              </span>
              {/* LOAD ANIM - CountUp animates between it's "start" and "end" props - Im using it here to create a "loading" style number count based on my year of birth */}
              <span className="ml-1 md:ml-3 flex items-center">
                &apos;<CountUp className="block tabular-nums w-[35px]" duration={1.5} delay={0.5} start={50} end={89} />&nbsp;—
              </span>  
            </m.span>
          </m.span>
        </span>
      </m.div>
    </m.div>
  )
}