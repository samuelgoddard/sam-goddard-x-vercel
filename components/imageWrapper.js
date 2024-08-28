import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'

export default function ImageWrapper({ src, alt, sizes, caption, className }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  // Configure Framer Motion's useScroll hook so we can scale the image on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-50% 50%", "end start"]
  })

  // Setup the scaling using Framer Motion's useTransform hook
  const scale = useTransform(scrollYProgress,[0, 1],[1.15, 1],{ clamp: false })
  
  return (
    <div className="block relative">
      <figure className={cx('text-center', className)}>
        <div className="aspect-square relative overflow-hidden">
          <m.div style={{ scale: scale }} className="absolute inset-0 will-change-transform">
            <Image
              fill
              src={src}
              alt={alt ? alt : 'MISSING ALT TEXT'}
              className={`w-full h-full inset-0 object-cover object-center transition-all ease-out duration-1000 will-change-transform ${imageIsLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-[1.15]' }`}
              sizes={sizes ? sizes : `(max-width: 768px) 100vw,65vw`}
              ref={ref}
              // Hook to animate the image in once it's loaded
              onLoad={event => {
                const target = event.target;
                if (target.src.indexOf('data:image/gif;base64') < 0) {
                  setImageIsLoaded(true)
                }
              }}
            />
          </m.div>
        </div>

        {caption && (
          <figcaption className="font-mono uppercase tracking-tight text-[9px]/[1] md:text-[10px]/[1] py-3 md:py-4">
            —&nbsp;{caption}
          </figcaption>
        )}
      </figure>
    </div>
  )
}