"use client"
import IconMinutemailer from './icons/plane'
import React, { useEffect,useState } from 'react'
import { Inter } from 'next/font/google'

import IconCopy from './icons/copy'

const inter = Inter({ subsets: ['latin'] })

// misc.css
const EmailButton = () => {
  const [clicked,setClicked]=useState(false)
  const myEmail="3williamroberts@gmail.com"
  const handleCopy = () =>{
    navigator.clipboard.writeText(myEmail)
    setClicked((prev)=> {return !prev})
    setTimeout(()=>{
      return setClicked((prev)=>{return !prev})
    },2000)
  }

  
  return (
    <div className='email-btn' onClick={handleCopy}>
      <IconMinutemailer/>
        <button className={inter.className}>{clicked? "Copied!" : "E-mail"}</button>
    </div>
  )
  }
  export default EmailButton