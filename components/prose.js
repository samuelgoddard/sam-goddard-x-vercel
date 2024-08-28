import cx from "classnames"

export default function Prose({ children, className }) {
  return(
    // A simple wrapper class to give text blocks some nicer defaults (lobotomized owl etc...)
    <div className={cx('[&>*+*]:mt-6 [&>*>a]:transition-[text-decoration-color] [&>*>a]:ease-[cubic-bezier([0.83,0,0.17,1])] [&>*>a]:duration-300 [&>*>a]:font-bold [&>*>a]:underline [&>*>a]:decoration-[rgba(0,0,0,0)] hover:[&>*>a]:decoration-white text-[20px]/[1.15] md:text-[23px]/[1.125] xl:text-[26px]/[1.125]', className)}>
      {children}
    </div>
  )
}