import React from 'react'
import IconGitea from '../icons/drink'
import { Noto_Color_Emoji } from 'next/font/google'
import { Caveat } from 'next/font/google';
const caveat = Caveat({subsets:['cyrillic'],weight:['400']})
const noto = Noto_Color_Emoji({subsets:['emoji'],weight:['400']})
//import Typewriter from "typewriter-effect";
const SideTypewriter = () => {
  return (
    <div className='flex gap-0 items-center'>
 <pre style={{color:"var(--cp-yellow)"}}>Built by </pre>

       
       
        <a 
        className={`${caveat.className} self-anchor`} 
       href="https://github.com/williambroberts/grid.git" target='_blank'>
        
        <pre 
        className='mr-0.5'
        style={{color:"var(--cp-green)"}}>WR</pre>
 
        </a> <span 
        
        className={`h-full
        flex items-center
        ${noto.className}`}>&#x026FA;</span> 
    </div>
  )
}

export default SideTypewriter