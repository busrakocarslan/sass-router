import React from 'react'
import { FiTwitter,FiFacebook,FiInstagram,FiGithub  } from "react-icons/fi";
import { Link } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='vertical'>
      <Link to="twitter" className='social-icons'><FiTwitter/></Link>
      <Link to="facebook" className='social-icons'><FiFacebook /></Link>
      <Link to="instagram" className='social-icons'><FiInstagram /></Link>
      <Link to="github" className='social-icons'><FiGithub /></Link>   
     
      
      
    </div>
  )
}

export default Footer