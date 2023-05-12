'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const PageItem = ({link,name}) => {
    const pathname = usePathname();
    console.log(pathname,"router pathname")
    const bgColor =pathname === link ? 'var(--bg-3)' : ''
    const myBorder =  pathname === link ? '1px solid var(--bg-4)' : 'none'
    const myBoxShadow = pathname ===link ? "var(--box-shadow-3)" : "none"
  const myStyles ={
    border:myBorder,
    backgroundColor:bgColor,
    boxShadow:myBoxShadow 
  }

  return (
    <Link className='page-item' href={link} style={{...myStyles}}>
       {icon} {name}
    </Link>
  )
}

export default PageItem