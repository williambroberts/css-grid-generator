"use client"
import Image from 'next/image'
import { useState,useEffect } from 'react'


export default function Home() {
 const [mouted,setMounted]=useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <main >
     
    </main>
  )
}
