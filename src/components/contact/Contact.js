import React from 'react'
import {AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_40thdjs", "template_5orghxs", form.current, "HP23Wdo077OYDD2Su")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact-container'>
            <div className='contact-options'>
                <article className='contact-option'>
                    <AiOutlineMail className='contact-option-icon'></AiOutlineMail>
                    <h4>Email</h4>
                    <h5>oa_jide@protonmail.com</h5>
                    <a href='mailto:oa_jide@protonmail.com' target='blank'> Send a Message</a>
                </article>
                <article className='contact-option'>
                    <AiFillLinkedin className='contact-option-icon'></AiFillLinkedin>
                    <h4>Linkedln</h4>
                    <h5>Olajide Abatti</h5>
                    <a href='https://www.linkedin.com/in/olajide-abatti-jr-410361126/' target='blank'> Send a Message</a>
                </article>
            </div>
            {/*END OF OPTIONS*/}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required></input>
                <input type='email' name='email' placeholder='Your Email' required></input>
                <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
