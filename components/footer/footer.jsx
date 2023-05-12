import React from 'react'
import IconGithub from '../icons/socials/github'
import Icon459Linkedin2 from '../icons/socials/linkedin'

const Footer = () => {
  return (
    <footer>
      <nav>
    
        <span className='footer-mid'>
        <a className="footer-anchor" href="  https://www.linkedin.com/in/williambroberts/" target='_blank'><Icon459Linkedin2/></a>
          <a className="footer-anchor" href="https://github.com/williambroberts/grid.git" target='_blank'><IconGithub/></a>
          </span>
      </nav>
    </footer>
  )
}

export default Footer