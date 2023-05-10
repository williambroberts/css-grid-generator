import React from 'react'
import Typewriter from "typewriter-effect";
const SideTypewriter = () => {
  return (
    <div>
    <Typewriter
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
       />
    </div>
  )
}

export default SideTypewriter