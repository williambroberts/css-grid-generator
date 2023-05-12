
import ProviderForTheme from '@/components/themes/themeProvider'
import '../styles/globals.css'
import '../styles/header.css'
import "../styles/misc.css"
import "../styles/grid.css"
import "../styles/footer.css"
import "../styles/animations.css"
import { Inter } from 'next/font/google'


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
         {children}
        
         </ProviderForTheme>
        </body>
       
      
      
    </html>
  )
}
