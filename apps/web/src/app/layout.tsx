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
        <>{children}</>
        <TailwindIndicator />
      </body>
    </html>
  )
}
