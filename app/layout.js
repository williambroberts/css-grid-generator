
import ProviderForTheme from '@/components/themes/themeProvider'
import '../styles/globals.css'
import '../styles/header.css'
import "../styles/misc.css"
import "../styles/animations.css"
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Css Grid Builder',
  description: 'A css grid and code generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
     
      <body className={inter.className}>
         <ProviderForTheme>
        <Header/>
        {children}
         route footer layout
         </ProviderForTheme>
        </body>
       
      
      
    </html>
  )
}
