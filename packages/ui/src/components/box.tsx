export function Box({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className='bg-white shadow-sm p-5 rounded-xl'>{children}</div>
}
