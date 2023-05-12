"use client"
import Image from 'next/image'
import { useState,useEffect } from 'react'
import LoadingPage from './loading'
import Grid from '@/components/grid/grid'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
export default function Home() {
 const [mounted,setMounted]=useState(false)
  useEffect(() => {
    setTimeout(()=>{
       setMounted(true)
    },100)
   
  }, [])

  if (!mounted) {
    return <LoadingPage/>
  }
  return (<>
   <Header/>
    <main>
      <div className='grid-wrapper'>
         <Grid/>
      </div>
    
    </main>
    
         <Footer/>
  </>)
}
