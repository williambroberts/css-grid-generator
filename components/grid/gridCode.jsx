'use client'
import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import Intro from '../intro/intro'
import Title from '../title/title'
const GridCode = ({codeCss,codeHtml}) => {
    const [isCss, setIsCss]=useState(false)
    const [clicked,setClicked]=useState(false)
    console.log(codeCss,'inpage')
    if (!codeCss[1]){
        return null
    }


  return (
    <div className='grid-code'>
      {/* back button */}
        <Title name={'Your Code'}/>
        <Intro>
            Here is your code!
        </Intro>
        {/* copy to clipboard */}
        <div className='button-flex'>
        <button 
        className='toggle-code-language'
         onClick={()=>setIsCss((prev)=>!prev)}>view {!isCss? 'Css' : 'Html'}</button>

          <button className='copy-button'>{clicked? 'Copied!':'Copy to clipboard'}</button>
        </div>
        

        <div className='grid-display-css' style={{display: isCss? 'inline-block':'none'}}>
            {codeCss[0]}
            <ul className='grid-display'>
              {codeCss[1].map((item)=> (<li key={uuidv4()}>{item}</li>) )}
              </ul> 
        </div>
        <div className='grid-display-html' style={{display: isCss? 'none':'inline-block'}}>
            {codeHtml}
        </div>
      {/* close page */}
    </div>
  )
}

export default GridCode