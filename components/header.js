import Container from '@/components/container'
import Time from '@/components/time'
import TextReveal from '@/components/textReveal'

export default function Header() {
  return (
    <Container asChild>
      <header className="fixed inset-0 bottom-auto z-50 bg-black text-white">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 text-xl/none lg:text-2xl/none border-b border-white/30 pt-4 pb-3 lg:pt-4 lg:pb-3 items-center">
          <div className="col-span-1 text-left hidden lg:block">
            <span className="block"><TextReveal>Hey Vercel —</TextReveal></span>
          </div>

          <div className="col-span-2 text-center flex justify-center items-center">
            <div className="relative flex overflow-hidden w-[75%] md:w-[50%] lg:w-[65%] lg:max-w-[450px]">
              <div className="animate-marquee whitespace-nowrap will-change-transform">
                {/* Loop over the same message a few times to create an *infinite carousel, add aria-hidden attr to all but the first so screen-readers don't repeat themselves */}
                {[...Array(4)].map((e, i) => {
                  return (
                  <span className="mr-2" key={i} aria-hidden={i !== 0 && true}>Vercel Design Engineer Application —</span>
                  )
                })}
              </div>
              
              {/* Second carousel animates while the first carousel resets <> and back and forth, add aria-hidden attr to all these as again we're duplicating content */}
              <div className="absolute top-0 animate-marquee2 whitespace-nowrap will-change-transform">
                {[...Array(4)].map((e, i) => {
                  return (
                  <span className="mr-2" key={i} aria-hidden="true">Vercel Design Engineer Application —</span>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-start-2 lg:col-start-4 col-span-2 lg:col-span-1 text-right justify-end hidden lg:flex">
            <TextReveal>
              <span className="block">—&nbsp;</span>
            </TextReveal>
            <TextReveal>
              <Time />
            </TextReveal>
          </div>
        </div>
      </header>
    </Container>
  )
}