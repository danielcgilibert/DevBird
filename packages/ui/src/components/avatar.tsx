'use client'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '../util'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export const AvatarStyles = cn(
  'inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-lg align-middle'
)

export function Avatar(props: AvatarProps): JSX.Element {
  return (
    <AvatarPrimitive.Root
      {...props}
      className={cn(AvatarStyles, props.className)}>
      <AvatarPrimitive.Image
        alt='Daniel Carmona'
        className='h-full w-full rounded-[inherit] object-cover'
        src='https://avatars.githubusercontent.com/u/44746462?v=4'
      />
      <AvatarPrimitive.Fallback className='text-violet-600  leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'>
        DC
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
