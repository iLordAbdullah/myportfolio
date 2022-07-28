import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_kslghqp', 'template_u6ctjw9', form.current, 'eJS57_dK4qoSU3Ipc')

      e.target.reset()
    }; 

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>alassqah@gmail.com</h5>
            <a href="mailto:alassqah@gmail.com" target="_blank">Send a Message</a>
          </article>
         {/*<article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5></h5>
            <a href="https://twitter.com/pss_ar" target="_blank">Go</a>
          </article>*/}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+966 55 916 7031 </h5>
            <a href="https://wa.me/966559167031" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact