import cx from 'classnames'
import { Slot } from '@radix-ui/react-slot'

export default function Container({ asChild, children, className, ...props }) {
  // Allow merging of classNames to a child element, uses <div> as default
  const Comp = asChild ? Slot : 'div';
  
  return(
    <Comp {...props} className={cx('px-4 lg:px-5', className)}>
      {children}
    </Comp>
  )
}