'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const PageItem = ({link,name,icon}) => {
    const pathname = usePathname();
    console.log(pathname,"router pathname")
    const myColor = pathname === link ? 'var(--t-1)':''
    const bgColor =pathname === link ? 'var(--bg-3)' : ''
    const myBorder =  pathname === link ? '1px solid var(--bg-4)' : 'none'
    const myBoxShadow = pathname ===link ? "var(--box-shadow-1)" : "none"
  const myStyles ={
    border:myBorder,
    backgroundColor:bgColor,
    boxShadow:myBoxShadow,
    color:myColor
  }

  return (
    <Link className='page-item' href={link} style={{...myStyles}}>
       {icon} {name}
    </Link>
  )
}

export default PageItem