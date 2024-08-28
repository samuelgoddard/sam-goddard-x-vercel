import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'
import cx from 'classnames'

export default function TextReveal({ children, className }) {
  return(
    <span className={cx('block relative overflow-hidden', className)}>
      {/* ANIM - simple "text reveal" style animation by translating the Y axix with an overflow-hidden wrapper - see @/helpers/transitions */}
      <m.span className="block will-change-transform" variants={reveal}>{children}</m.span>
    </span>
  )
}