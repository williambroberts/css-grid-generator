'use client'
import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import Intro from '../intro/intro'
import Title from '../title/title'
const GridCode = ({items,codeCss,codeHtml}) => {
    const [isCss, setIsCss]=useState(false)
    const [clicked,setClicked]=useState(false)
    console.log(codeCss,'css',codeHtml,'html',items,'items')
    if (items.length===0){
        return null
    }
    if (codeCss.length<1){
      return null
    }

    const handleCopy = () => {
      setClicked((prev)=>!prev)
      let theCode = ''
      if (isCss){
        //codeCss[0].forEach((item)=> theCode+=item)
       // codeCss[1].forEach((item)=> theCode+=item)
        let theText = document.getElementsByClassName('grid-code-css')[0].textContent
        //console.log(theText)
        //navigator.clipboard.writeText(theText)
       
       console.log(typeof(theText))
        navigator.clipboard.writeText(theText)


      }else{
        codeHtml.forEach((item)=>theCode+=item)
        let theText = document.getElementsByClassName('grid-code-html')[0].textContent
        navigator.clipboard.writeText(theText)
        console.log(typeof(theText))

      }
     
      setTimeout(()=>{
        return setClicked((prev)=>{return !prev})
      },2000)
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

          <button className='copy-button' onClick={()=>handleCopy()}>{clicked? 'Copied!':'Copy to clipboard'}</button>
        </div>
        

        <div className='grid-code-css' style={{display: isCss? 'inline-block':'none'}}>
        <ul className='code-list'>
           
              {codeCss[0].map((item)=> (<li className='code-list-item' key={uuidv4()}>{item}</li>) )}
              </ul> 


            <ul className='code-list'>
              {codeCss[1].map((item)=> (<li className='code-list-item' key={uuidv4()}>{item}</li>) )}
              </ul> 
        </div>
        <div className='grid-code-html' style={{display: isCss? 'none':'inline-block'}}>
           <ul className='code-list'>
            {codeHtml.map((item)=> (<li className='code-list-item' key={uuidv4()}>{item}</li>) )}
            </ul>
        </div>
      {/* close page */}
    </div>
  )
}

export default GridCode