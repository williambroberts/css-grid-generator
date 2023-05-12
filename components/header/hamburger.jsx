import React from 'react'

const Hamburger = ({isHamburger}) => {
  return (
    <div className={`hamburger ${isHamburger? 'open':''}`}>

    </div>
  )
}

export default Hamburger