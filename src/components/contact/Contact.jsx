import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = ({messenger, gmail, whatsapp}) => {
  const messengerLink = `https://m.me/${messenger}`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsapp}`;
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ibv32b1', 'template_6h89116', form.current, 'ZhMbFK01EtMEv-05r')
      .then((result) => {
          alert(result.text);
      }, (error) => {
          alert(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option_icon'/>
              <h4>Email</h4>
              <h5>{gmail}</h5>
              <a target='_blank' href="mailto:shahwarkhan092@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option_icon'/>
              <h4>Messenger</h4>
              <h5>{messenger}</h5>
              <a target='_blank' href={messengerLink}  >Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option_icon'/>
              <h4>WhatsApp</h4>
              <h5>{whatsapp}</h5>
              <a target='_blank' href={whatsappLink}>Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section> 
  )
}

export default Contact
