import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href="https://github.com" target='blank'><BsGithub/></a>
        <a href="https://instagram.com" target='blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials