import Container from '@/components/container'
import { contacts } from '@/helpers/contacts'

export default function Footer() {
  return (
    <Container asChild>
      <footer>
        <div className="text-lg/none lg:text-xl/none border-t border-white/30 pt-4 pb-3 lg:pt-4 lg:pb-3">
          <nav className="flex space-x-3 lg:space-x-4 justify-center" aria-label="Contact">
            {contacts.map((e, i) => {
              return (
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group a11y-focus"
                  key={i}
                >
                  <span className="block relative overflow-hidden">{e.title} <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
                </a>
              )
            })}
          </nav>
        </div>
      </footer>
    </Container>
  )
}