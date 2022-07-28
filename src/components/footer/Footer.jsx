import React from 'react'
import './footer.css'
import {SiTwitter} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdullah</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com" target="_blank"><SiTwitter /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
        <a href="https://youtube.com" target="_blank"><BsYoutube /></a>
        <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdullah Alassqah. All Rights Reserved.</small>
      </div>
    </footer> 
  )
}

export default Footer