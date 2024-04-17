import React from 'react'
import "./Contact.scss"
import { MdOutlineEmail,MdOutlinePermPhoneMsg,MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>   
    <h2>Contact 7/24</h2>
    <div className="contact__list">
      <div className="contact__item">
      <MdOutlineEmail /> Email
        <div className="text-secondary">angoracultureturizm@gmail.com</div>
      </div>
      <div className="contact__item">
       <MdOutlinePermPhoneMsg /> Phone
        <div className="text-secondary">+40 (571) 360-1234</div>
      </div>
      <div className="contact__item">
      <MdLocationOn /> Address
        <div className="text-secondary">Anafartalar Caddesi No:95/67 Altındağ/ANKARA TURKEY</div>
      </div>
    </div>
  </div>
  )
}

export default Contact