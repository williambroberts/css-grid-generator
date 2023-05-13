import React from 'react'
import IconGitea from '../icons/drink'

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
       href="https://github.com/williambroberts/grid.git" target='_blank'>William</a> <IconGitea style={{color:`var(--themecolor)`}}/>  
    </div>
  )
}

export default SideTypewriter