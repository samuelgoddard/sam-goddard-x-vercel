import localFont from 'next/font/local'

export const PPEditorialOld = localFont({
  src: [
    {
      path: '../public/fonts/PPEditorialOld-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPEditorialOld-Italic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  subsets: ['latin'],
  variable: '--font-PPEditorialOld',
})

export const SuisseIntlMono = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntlMono-Regular-WebS.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-SuisseIntlMono',
})

export const MigraExtralight = localFont({
  src: [
    {
      path: '../public/fonts/Migra-Extralight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MigraItalic-ExtralightItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  subsets: ['latin'],
  variable: '--font-MigraExtralight',
})