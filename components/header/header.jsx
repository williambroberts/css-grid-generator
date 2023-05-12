'use client'
import React, { useEffect,useState } from 'react'
import ThemeButton from '../themes/themeButton'
import Hamburger from './hamburger'
import SelfOut from '../self/selfOut'

const Header = () => {
  const [isHamburger,setIsHamburger]=useState(false)

  useEffect(()=>{
    let htmlTag = document.querySelector('html')
     htmlTag.style.overflowY= isHamburger?'hidden':'scroll'
  },[isHamburger])
  return (
   <header>
    <nav className='header-nav'>
        <span className='header-self'><SelfOut/></span>
        <span className='header-center'>CSS Grid Generator</span>
        <span className='header-mid'><ThemeButton/></span>
        <span className='header-right' onClick={()=>setIsHamburger((prev)=>!prev)}>☰</span>
    </nav>
    
    
    <div className={`hamburger-blur ${isHamburger? 'open':''}`} onClick={()=>setIsHamburger((prev)=>!prev)}></div>
    
    <Hamburger isHamburger={isHamburger}/>
   
   </header>
  )
}

export default Header