import cx from 'classnames'
import { Slot, Slottable } from '@radix-ui/react-slot'

export default function SubHeading({ asChild, children, className, ...props }) {
  // Allow moving classNames to a semantic child element (aka: a H3), uses <span> as default
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp {...props} className={cx('block text-center text-lg/none md:text-xl/none xl:text-2xl/none', className)}>— <Slottable>{children}</Slottable> —</Comp>
  )
}