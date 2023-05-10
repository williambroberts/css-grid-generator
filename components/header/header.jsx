import React from 'react'
import Self from '../self/self'
import ThemeButton from '../themes/themeButton'
import Hamburger from './hamburger'

const Header = () => {
  return (
   <header>
    <nav className='header-nav'>
        <span className='header-self'><Self/></span>
        <span className='header-mid'><ThemeButton/></span>
        <span className='header-right'>☰</span>
    </nav>
    <Hamburger/>
    <div className='hamburger-blur'></div>
   </header>
  )
}

export default Header