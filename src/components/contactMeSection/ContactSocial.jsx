import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='linkedin.com/in/vijayakumar-shavmiyan-6264b4255' Icon={FaLinkedinIn}/>
        <SingleContactSocial link='https://github.com/ShavmiyanV' Icon={FiGithub}/>
        <SingleContactSocial link='https://www.instagram.com/shavmi_v/' Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial