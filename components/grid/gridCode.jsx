'use client'
import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import Intro from '../pageComponents/intro/intro'
import Title from '../pageComponents/title/title'
import { Inter } from 'next/font/google'
import PageWrapper from '../pageComponents/pageWrapper/pageWrapper'
import IconCopy from '../icons/copy'
import IconFiletypeCss from '../icons/css'
import IconFiletypeHtml from '../icons/html'
import Link from 'next/link'
import IconArrowLeft from '../icons/navigation/left'
import ContentBox from '../pageComponents/contentBox/contentbox'
const inter = Inter({ subsets: ['latin'] })



const GridCode = ({items,codeCss,codeHtml,setIsGridCodeOpen}) => {
    const [isCss, setIsCss]=useState(false)
    const [clicked,setClicked]=useState(false)
    console.log(codeCss,'css',items,'items' )
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
    <>
    
    <div className='grid-code'>
      <PageWrapper>
      {/* back button */}
      <span className={`${inter.className} light-button`}

         onClick={()=>setIsGridCodeOpen((prev)=>!prev)}
          > <IconArrowLeft/> Back</span>
        <Title name={'Your Code'}/>
        <Intro>
            Here is your {isCss? 'CSS': 'HTML'} code!
        </Intro>
        



        <div className='button-flex'>
        <button style={{width:`152px`}}
        className={`${inter.className} dark-button`}
         onClick={()=>setIsCss((prev)=>!prev)}> {isCss? 
        <span className='flex-row' ><IconFiletypeHtml/>view html code</span> :  <span className='flex-row'><IconFiletypeCss/> view css code</span>

        }</button>

          <button className={`${inter.className} light-button`} 
          style={{width:`180px`}}
          onClick={()=>handleCopy()}><IconCopy/>{clicked? 'Copied, thank you!':'Copy to clipboard'}</button>
        </div>
        
        <ContentBox>
        <div className='grid-code-css' style={{display: isCss? 'inline-block':'none'}}>
          
          <div className="code-line">
            <span className='html-2'>{codeCss[0][0]}</span>
            <span className='html-1'>{codeCss[0][1]}</span>
          </div>

          <div className="code-line-inner">
            <span className='html-1'>{codeCss[0][2]}</span>
            <span className='html-2'>{codeCss[0][3]}</span>
            <span className='html-3'>{codeCss[0][4]}</span>
            <span className='html-2'>{codeCss[0][5]}</span>
          </div>

          
          <div className="code-line-inner">
            <span className='html-1'>{codeCss[0][6]}</span>
            <span className='html-3'>{codeCss[0][7]}</span>
            <span className='html-3'>{codeCss[0][8]}</span>
            <span className='html-3'>{codeCss[0][9]}</span>
          </div>
        <div className="code-line-inner">
            <span className='html-1'>{codeCss[0][10]}</span>
            <span className='html-3'>{codeCss[0][11]}</span>
            <span className='html-3'>{codeCss[0][12]}</span>
            <span className='html-3'>{codeCss[0][13]}</span>
          </div>
          <div className="code-line-inner">
            <span className='html-1'>{codeCss[0][14]}</span>
            <span className='html-3'>{codeCss[0][15]}</span>
            <span className='html-3'>{codeCss[0][16]}</span>
            <span className='html-3'>{codeCss[0][17]}</span>
          </div>
          <div className="code-line-inner">
            <span className='html-1'>{codeCss[0][18]}</span>
            <span className='html-3'>{codeCss[0][19]}</span>
            <span className='html-3'>{codeCss[0][20]}</span>
            <span className='html-3'>{codeCss[0][21]}</span>
          </div>
          
          <div className="code-line">
            <span className='html-1'>{codeCss[0][22]}</span>
          </div>

          {codeCss[1].map((item)=> (
            <div key={uuidv4()} className='code-line'>
              <span className='html-2'>{item[0]}</span>
              <span className='html-1'>{item[1]}</span>
              <span className='html-1'>{item[2]}</span>
              <span className='html-3'>{item[3]}</span>
              <span className='html-1'>{item[4]}</span>
              <span className='html-1'>{item[5]}</span>
            </div>

          ))}
          
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
              <div key={uuidv4()} className='code-line-inner'>
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
        </ContentBox>
      {/* close page */}
    </PageWrapper>
    </div>
    
 </> )
}

export default GridCode