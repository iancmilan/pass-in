import { ComponentProps } from "react"

// ao extender NavLinkProps a ComponentProps<'a'>, o NavLink pode receber todas a propriedades que uma âncora (a) recebe no html
interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className='font-medium text-sm text-zinc-300'>
      {props.children}
    </a>
  )
}