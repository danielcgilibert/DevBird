/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/button-has-type */
import type { ReactNode } from 'react'
import { cn } from '../util'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  children: ReactNode
  onClick?: () => void
  icon?: ReactNode
  loadingstatus?: boolean
  disabled?: boolean
}

export const ButtonStyles = cn(
  'bg-blue-500 ml-auto w-20 h-8 rounded text-white'
)

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={ButtonStyles}
      disabled={props.disabled || props.loadingstatus}
      onClick={props.onClick}
      type={props.type}
      {...props}>
      {props.children}
    </button>
  )
}
