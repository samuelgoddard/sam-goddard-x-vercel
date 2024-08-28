import '@/styles/main.css'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ReactLenis } from '@studio-freight/react-lenis';

import SEO from '@/helpers/seo';
import { MigraExtralight, SuisseIntlMono, PPEditorialOld } from '@/helpers/fonts';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    // MOTION - Init Lenis (React Wrapper Library): Lenis is a lightweight, accessible smooth scrolling library - https://lenis.darkroom.engineering/
    <ReactLenis root options={{ lerp: 0.15 }}>
      <DefaultSeo {...SEO} /> 

      <div className={`${MigraExtralight.variable} ${SuisseIntlMono.variable} ${PPEditorialOld.variable} font-serif bg-black text-white`}>
        {/* MOTION - Configure Framer Motion's reduced-motion preference API (used on index.js) */}
        <MotionConfig reducedMotion="user">
          {/* MOTION - Init framer Motion page transitions with AnimatePresence API */}
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </MotionConfig>
      </div>
    </ReactLenis>
  )
}