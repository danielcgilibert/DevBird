export default function ExploreLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className='container max-w-6xl mx-auto mt-8 antialiased pb-8'>
      {children}
    </div>
  )
}
