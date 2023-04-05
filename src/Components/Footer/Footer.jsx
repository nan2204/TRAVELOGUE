import React from 'react';
import './footer.css';
import  {SiYourtraveldottv} from 'react-icons/si';
import {ImFacebook2} from 'react-icons/im';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
   <div className="footer">
    <div className="secContainer container grid">
      <div className="logoDiv">
        <div className="footerlogo">
          <a href="#" className="logo flex">
           <h1 className='flex'>
           <SiYourtraveldottv className='icon'/>CROMO
           </h1>
          </a>
        </div>
        <div className="socials flex">
        <ImFacebook2 className='icon'/>
        <AiOutlineTwitter className='icon'/>
        <AiFillInstagram className='icon'/>
      </div>
      </div>
       <div className="footerLinks">
        <span className='linkTitle'>HELPFUL LINKS</span>
        <li><a href='#'>DESTINATION</a></li>
        <li><a href='#'>SUPPORT</a></li>
        <li><a href='#'>TRAVEL & CONDITIONS</a></li>
        <li><a href='#'>PRIVACY</a></li>
       </div>

       <div className="footerLinks">
        <span className='linkTitle'> 
        INFORMATION</span>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>EXPLORE</a></li>
        <li><a href='#'>TRAVEL</a></li>
        <li><a href='#'>BLOG</a></li>
       </div>

       <div className="footerLinks">
        <span className='linkTitle'> 
        CONTACT US</span>
     <span className='phone'>+91 9360490282</span>
     <span className='email'>chromotravel@gmail.com</span>
       </div>
    </div>
   </div>
  )
}

export default Footer;