'use client'
import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import Intro from '../intro/intro'
import Title from '../title/title'
const GridCode = ({items,codeCss,codeHtml}) => {
    const [isCss, setIsCss]=useState(false)
    const [clicked,setClicked]=useState(false)
    console.log(codeHtml,'html',items,'items',codeHtml.slice(1,codeHtml.length-1),"slices")
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
        className='dark-button'
         onClick={()=>setIsCss((prev)=>!prev)}>view {!isCss? 'Css' : 'Html'}</button>

          <button className='light-button' onClick={()=>handleCopy()}>{clicked? 'Copied!':'Copy to clipboard'}</button>
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
           
          <div class="code-line">
             <span className='html-1'>{codeHtml[0][0]}</span> 
             <span className='html-2'>{codeHtml[0][1]}</span> 
             <span className='html-3'>{codeHtml[0][2]}</span> 
             <span className='html-4'>{codeHtml[0][3]}</span> 
             <span className='html-5'>{codeHtml[0][4]}</span> 
             <span className='html-1'>{codeHtml[0][5]}</span> 
           </div>
            { codeHtml.slice(1,codeHtml.length-1).map((item,index)=> (
              <div className='code-line-inner'>
                  <span className='html-1'>{item[0]}</span> 
                  <span className='html-2'>{item[1]}</span>
                  <span className='html-3'>{item[2]}</span>
                  <span className='html-4'>{item[3]}</span>
                  <span className='html-5'>{item[4]}</span>
                  <span className='html-1'>{item[5]}</span>
                  <span className='html-1'>{item[6]}</span>
                  <span className='html-2'>{item[7]}</span>
                  <span className='html-1'>{item[8]}</span>

              </div>

            ))}

           <div class="code-line">
             <span className='html-1'>{codeHtml[codeHtml.length-1][0]}</span> 
             <span className='html-2'>{codeHtml[codeHtml.length-1][1]}</span> 
             <span className='html-1'>{codeHtml[codeHtml.length-1][2]}</span> 
            
           </div>
        </div>
      {/* close page */}
    </div>
  )
}

export default GridCode