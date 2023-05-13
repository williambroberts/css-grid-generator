import React from 'react'
import Self from '../self/self'
import PageItem from '../pageItem/pageItem'
import IconHome from '../icons/pages/home'
import IconCompassDrafting from '../icons/pages/about'
import IconInfoSquare from '../icons/pages/info'
const Hamburger = ({isHamburger}) => {
  return (
    <div className={`hamburger ${isHamburger? 'open':''}`}>
       <div className='hamburger-pages'>
        <span className='hamburger-section-heading'>PAGES</span>
        <PageItem name={"Home"} link={"/"} icon={<IconHome/>}/>
        <PageItem name={"About"} link={"/about"} icon={<IconInfoSquare/>}/>
       </div>
        <Self/>
    </div>
  )
}

export default Hamburger