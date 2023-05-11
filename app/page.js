"use client"
import Image from 'next/image'
import { useState,useEffect } from 'react'
import LoadingPage from './loading'
import Grid from '@/components/grid/grid'


export default function Home() {
 const [mounted,setMounted]=useState(false)
  useEffect(() => {
    setTimeout(()=>{
       setMounted(true)
    },10)
   
  }, [])

  if (!mounted) {
    return <LoadingPage/>
  }
  return (
    <main>
      <div className='grid-wrapper'>
         <Grid/>
      </div>
    
    </main>
  )
}
