import React from 'react'
import SideTypewriter from '../typewriter/selfTyper'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
const caveat = Caveat({
    subsets: ['cyrillic'],
    fallback: ['system-ui', 'arial']
  })

const Self = () => {
  return (
    <div className='self'>
        <div className='self-top'>
            <a href="/" className='self-photo'></a>
            <div className="self-heading">
                <span>Css Grid Generator</span>
                {/* <span className={caveat.className} style={{color:'var(--frenchred)'}}>William Roberts</span> */}
                <span className='self-profession'  ><SideTypewriter/></span>
            </div>
        </div>
        
    </div>
  )
}

export default Self