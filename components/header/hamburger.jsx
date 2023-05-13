import React from 'react'

import PageItem from '../pageItem/pageItem'
import IconHome from '../icons/pages/home'

import IconInfoSquare from '../icons/pages/info'
import SelfOut from '../self/selfOut'
const Hamburger = ({isHamburger}) => {
  return (
    <div className={`hamburger ${isHamburger? 'open':''}`}>
       <div className='hamburger-pages'>
        <span className='hamburger-section-heading'>PAGES</span>
        <PageItem name={"Home"} link={"/"} icon={<IconHome/>}/>
        <PageItem name={"About"} link={"/about"} icon={<IconInfoSquare/>}/>
       </div>
        <SelfOut/>
    </div>
  )
}

export default Hamburger