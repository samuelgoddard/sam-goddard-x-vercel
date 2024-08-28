import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLenis } from '@studio-freight/react-lenis'

import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import Intro from '@/components/intro'
import TextReveal from '@/components/textReveal'

import { grain } from '@/helpers/transitions'
import { awards } from '@/helpers/awards'
import Prose from '@/components/prose'
import ProjectsNav from '@/components/projectsNav'
import ImageWrapper from '@/components/imageWrapper'
import SectionHeading from '@/components/sectionHeading'
import Header from '@/components/header'

export default function Home() {
  const [intro, setIntro] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  // useLenis hook for smoothscrolling anchor links
  const lenis = useLenis();

  // If prefers-reduced-motion is enabled by the user, remove the intro animation
  useEffect(() => {
    setTimeout(()=>{
     setIntro(false)
    }, shouldReduceMotion ? 0 : 2200)

  }, [intro, shouldReduceMotion]);

  return (
    <Layout>
      <NextSeo title="Senior Design Engineer" />
      
      <LazyMotion features={domAnimation}>
        <m.div 
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Header />

          <main className="pt-[65px] lg:pt-[70px]">
            <AnimatePresence>
              { intro && (<Intro />)}
            </AnimatePresence>

            <m.div variants={grain} className="fixed inset-0 w-full h-full overflow-hidden z-100 opacity-[0.022] bg-repeat pointer-events-none bg-[url('/images/grain.gif')] bg-center motion-reduce:hidden" aria-hidden="true"></m.div>

            <Container>
              <section>
                <h1 className="uppercase text-[18vw]/[0.95] md:text-[10.75vw]/[0.95] lg:text-[10.8vw]/[0.95] xl:text-[11vw]/[0.95] font-display tracking-tight w-full text-center md:whitespace-nowrap border-b border-white/30 pb-3">
                  <TextReveal>Samuel Goddard</TextReveal>
                </h1>
              </section>

              <section>
                <SectionHeading
                  subHeading="Who Am I?"
                  heading={<>A Senior Design Engineer who bridges the gap between <em>design</em> & <em>code</em>.</>}
                />

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                    <div className="w-10/12 md:w-9/12">
                      <Prose className="md:max-w-[550px] mx-auto">
                        <p>Hey! I&rsquo;m Sam, a <em>Design Engineer</em> from Nottingham, United Kingdom. I have spent the last 15+ years in web design and development, building <em>close-knit collaborations</em> with designers, engineers and generally good people to create <a href="#projects" onClick={()=> lenis?.scrollTo('#projects', { duration: 2.5, lerp: 0.1, offset: -50 } )}>ambitious websites</a> for a wide variety of clients.</p>

                        <p>I&rsquo;ve always been creatively minded with an interest in design, photography, video and emerging tech, and decided to turn my love of hacking MySpace profile designs into a full time career, starting with a degree in Multimedia Technology.</p>

                        <p>Over the course of my career I&rsquo;ve worked as <em>both a designer &amp; developer</em> for large agencies, smaller start-ups, and ran my own creative studio, <a href="https://www.shiftwalk.studio/" target="_blank" rel="noopener noreferrer">ShiftWalk</a>. I&rsquo;m currently employed as a <em>Senior Design Engineer</em> at <a href="https://www.intercom.com/" target="_blank" rel="noopener noreferrer">Intercom</a>, an AI first customer service platform.</p>

                        <p>Below is a small sample of some of my more recent work I&rsquo;m particularly proud of. Collaborating closely with the designers, all of these were entirely engineered by me using my go-to stack of <em>Next.js</em>, <em>Framer Motion</em>, <em>Sanity</em>, and <em>Tailwind</em>.</p>
                      </Prose>
                    </div>
                  </div>

                  <div className="col-span-1 pl-0 md:p-4 md:p-5 pr-0 md:pr-0 md:pb-0 mb-3 md:mb-0">
                    <ImageWrapper
                      src="/images/a.jpg"
                      alt="Sam and Chunk (a dog) sat on a cliff edge"
                      caption="Me and Chunk the dog (I'm the one on the left)"
                      className="md:text-right"
                    />
                  </div>
                </div>
              </section>

              <section>
                <ProjectsNav />
              </section>

              <section className="relative">
                <SectionHeading
                  subHeading="Extracurriculars & Recognition"
                  heading={<>Highly <em>motivated</em>, constantly <em>learning</em>, multi <em>award-winning</em>.</>}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 mb-4 md:mb-0">
                  <div className="col-span-1 md:border-r md:border-white/30 pr-0 md:p-4 md:p-5 md:pb-0 pl-0 md:pl-0 order-2 md:order-1">
                    <ImageWrapper
                      src="/images/c.jpg"
                      alt="Sam stood on a path in the Lake District with a beautiful view behind"
                      caption="Hiking in the Lake District (I go outside too)"
                      className="md:text-left"
                    />
                  </div>
                  
                  <div className="col-span-1 flex justify-center py-12 md:py-[7.5vw] order-1 md:order-2">
                    <div className="w-10/12 md:w-9/12">
                      <Prose className="max-w-[550px] mx-auto">
                        <p>I&rsquo;m <em>highly motivated</em> to push myself out of my comfort zone, I seek out opportunities to learn new tools and technologies through immersing myself in dev &amp; design communities.</p>

                        <p>For the past 2 years I have been selected as a judge on both the dev and design juries at <a href="https://www.awwwards.com/jury-member/samuelgoddard/" target="_blank" rel="noopener noreferrer">AWWWARDS</a>, which has given me great insight into a wealth of bleeding edge design, motion and engineering techniques from industry titans.</p>

                        <p>I&rsquo;m a big advocate for <em>open source</em>, and have previously contributed as a core maintainer towards <a href="https://fractal.build/" target="_blank" rel="noopener noreferrer">Fractal</a>, a design system tool created by Clearleft. I was responsible for porting the documentation site over to Vuepress at a time where I was particularly interested in learning more about Vue.</p>

                        <p>Outside of work I absolutely love exploring the outdoors, travelling to new places, cycling, attempting to cook, gaming, music, photography and recently, learning to garden in our new allotment.</p>

                        <p>A selection of my work at <a href="https://www.shiftwalk.studio/" target="_blank" rel="noopener noreferrer">ShiftWalk</a> has featured in some industry leading publications like <a href="https://www.siteinspire.com/directory/8685-shiftwalk-studio" target="_blank" rel="noopener noreferrer">Siteinspire</a>, <a href="https://tympanus.net/codrops/collective/collective-643/" target="_blank" rel="noopener noreferrer">Codrops</a>, <a href="https://www.awwwards.com/samuelgoddard/" target="_blank" rel="noopener noreferrer">AWWWARDS</a>, <a href="https://www.cssdesignawards.com/search?search_term=sam+goddard" target="_blank" rel="noopener noreferrer">CSS Design Awards</a> and <a href="https://the-brandidentity.com/search?filter=directory_graphic-design%3AShiftWalk%3Afalse" target="_blank" rel="noopener noreferrer">The Brand Identity</a>. A selection of my proudest awards and features can be seen below.</p>
                      </Prose>
                    </div>
                  </div>
                </div>

                <ul className="uppercase border-t border-white/30">
                  {awards.map((e, i) => {
                    return (
                      <li className="block text-[18px]/[1] md:text-[3vw]/[1] lg:text-[2.5vw]/[1] xl:text-[2vw]/[1] font-display tracking-tight" key={i}>
                        <span className="border-b border-white/30 w-full py-2 md:py-2 flex items-end">
                          <span className="block">
                            <TextReveal>{e.title}</TextReveal>
                          </span>
                          
                          <span className="ml-auto block">
                            <TextReveal>
                              <span className="flex items-end">
                                <span className="block">{e.award}</span>
                                <span className="block font-serif italic tracking-normal pl-1 md:pl-2 pr-1 text-[75%]/[1.15]">(&nbsp;{e.timesWon}&nbsp;)</span>
                              </span>
                            </TextReveal>
                          </span>
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <span className="flex mt-3 md:mt-6 font-mono uppercase tracking-tight text-[9px]/[1] md:text-[10px]/[1] mb-3 pb-0 text-right ml-auto absolute bottom-0 right-0 left-0 md:left-auto translate-y-[35px] md:translate-y-[40px]"><span className="block">* Nominee<span className="hidden md:inline">&nbsp;/&nbsp;</span></span><span className="block ml-auto">** Special Kudos</span></span>
              </section>

              <section>
                <SectionHeading
                  subHeading="Sure, awards are cool&hellip; But why me?"
                  heading={<>I have a great eye for <em>detail</em> &amp; love embedding myself in the <em>creative process</em>.</>}
                />

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1 md:border-r md:border-white/30 flex justify-center py-12 md:py-[7.5vw]">
                    <div className="w-10/12 md:w-9/12">
                      <Prose className="max-w-[550px] mx-auto">
                        <p>Since taking the leap into self-employment 5 years ago, I have been fanatical about design finesse, performance, accessibility, and helping to <em>bring designs alive</em> in the browser. During this time I&rsquo;ve pushed myself to learn industry leading technologies, with a particular focus on <em>React (Next.js)</em>, animation libraries such as <em>Framer Motion</em> and <em>GSAP</em>, headless CMSs such as <em>Dato</em> and <em>Sanity</em>, and design tools like <em>Figma</em> and <em>Framer</em>.</p>
                          
                        <p>I believe that the old waterfall method of design to engineering hand-off is outdated, therefore as a developer I have tried to position myself more <em>asynchronously</em> within design teams, offering opportunities to bring design into browser earlier, removing friction between teams, and ultimately embedding myself in the creative process earlier.</p>
                        
                        <p>I pride myself in my approachability and like to create <em>meaningful relationships</em> with everyone I work with. I have a wealth of experience in communicating technical restrictions and opportunities to design teams and stakeholders, and in <em>upskilling others</em>. As an R&D Engineer at a previous agency, part of my role was to introduce Tailwind to the engineering team. This was achieved over the course of a year via the introduction of training documentation, delivering presentations and pair programming.</p>

                        <p>I&rsquo;m highly <em>self-motivated</em> and skilled in prioritising tasks to meet deadlines, and I&rsquo;m happy working both autonomously and as part of a team, having worked for agencies and successfully running my own independent studio. I&rsquo;m uniquely positioned as I&rsquo;m currently employed as a <em>Senior Design Engineer</em> at <a href="https://www.intercom.com/" target="_blank" rel="noopener noreferrer">Intercom</a>, an emerging role in this field and the first hire of it&rsquo;s kind for them.</p>
                      </Prose>
                    </div>
                  </div>

                  <div className="col-span-1 pl-0 md:p-4 md:p-5 pr-0 md:pr-0 md:pb-0">
                    <ImageWrapper
                      src="/images/bb.jpg"
                      alt="Sam taking photos in the Arashiyama Bamboo Grove in Japan"
                      caption="A not staged photo of me somewhere in Japan"
                      className="md:text-right"
                    />
                  </div>
                </div>
              </section>

              <section>
                <SectionHeading
                  subHeading="Like what you see?"
                  heading={<>I would absolutely love to hear how I could help you make Vercel <em>even better</em>.</>}
                />

                <div className="grid grid-cols-1 mb-4 md:mb-0">
                  <div className="col-span-1 flex justify-center py-12 md:py-[7.5vw] order-1 md:order-2">
                    <div className="w-10/12 md:w-9/12">
                      <Prose className="max-w-[550px] mx-auto text-center">
                        <p>Hopefully this has given you a small sample of my work, enough to reach out and start a conversation. I genuinely think I&rsquo;d be a <em>great fit</em> for the role and I&rsquo;d love to hear a little bit more.</p>

                        <p>If you feel the same, find out more below.</p>
                      </Prose>
                    </div>
                  </div>
                </div>
              </section>
            </Container>
          </main>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
