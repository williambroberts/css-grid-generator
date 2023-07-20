'use client'
import React, { useEffect,useState } from 'react'
import ThemeButton from '../themes/themeButton'
import Hamburger from './hamburger'
import SelfOut from '../self/selfOut'
import IconSoftware_layout_header_complex3 from '../icons/grid'

const Header = () => {
  const [isHamburger,setIsHamburger]=useState(false)

  useEffect(()=>{
    let htmlTag = document.querySelector('html')
     htmlTag.style.overflowY= isHamburger?'hidden':'scroll'
  },[isHamburger])
  return (
   <header
   data-theme="dark">
    <nav className='header-nav'>
        <span className='header-self'><SelfOut/></span>
        <span className='header-center'>
          <pre style={{color:"var(--cp-purple)"}}>CSS</pre>
          <span style={{color:"var(--t-1)"}}>:</span>
          <pre style={{color:"var(--cp-red)"}}> GRID GENERATOR</pre>
          <span style={{color:"var(--t-1)"}}>;</span>
        {/* Grid Generator <IconSoftware_layout_header_complex3/> */}
        </span>
        <span className='header-mid'>
          {/* <ThemeButton/> */}
          </span>
        <span className='header-right' onClick={()=>setIsHamburger((prev)=>!prev)}>☰</span>
    </nav>
    
    
    <div className={`hamburger-blur ${isHamburger? 'open':''}`} onClick={()=>setIsHamburger((prev)=>!prev)}></div>
    
    <Hamburger isHamburger={isHamburger}/>
   
   </header>
  )
}

export default Header