import React from 'react'
import IconGitea from '../icons/drink'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets:['emoji'],weight:['400']})
//import Typewriter from "typewriter-effect";
const SideTypewriter = () => {
  return (
    <div className='flex-row'>
    {/* <Typewriter
       options={{
        deleteSpeed:'natural',
        loop: true
      }}
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("I build websites")
         
       .pauseFor(10000)
       .deleteAll()
       .typeString("Web Developer")
       .pauseFor(2000)
       .start();
       }}
       /> */}
       Built by <a  className='self-anchor'
       href="https://github.com/williambroberts/grid.git" target='_blank'>William</a> <span className={noto.className}>&#x026FA;</span> 
    </div>
  )
}

export default SideTypewriter