import { Header } from '../components/header'
import { TailwindIndicator } from '../components/tailwind-indicator'
import '../styles/global.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className='bg-[#F2F2F2] w-screen h-screen'>
        <Header />
        <div className='container max-w-6xl mx-auto mt-8 antialiased pb-8'>
          {children}
        </div>
        <TailwindIndicator />
      </body>
    </html>
  )
}
