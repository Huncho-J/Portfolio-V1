import React from 'react'
import {AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact-container'>
            <div className='contact-options'>
                <article className='contact-option'>
                    <AiOutlineMail></AiOutlineMail>
                    <h4>Email</h4>
                    <h5>oa_jide@protonmail.com</h5>
                    <a href='mailto:oa_jide@protonmail.com' target='blank'> Send a Message</a>
                </article>
                <article className='contact-option'>
                    <AiFillLinkedin></AiFillLinkedin>
                    <h4>Linkedln</h4>
                    <h5>Olajide Abatti</h5>
                    <a href='https://www.linkedin.com/in/olajide-abatti-jr-410361126/' target='blank'> Send a Message</a>
                </article>
            </div>
            {/*END OF OPTIONS*/}
            <form action=''>
                <input type="text" name='name' placeholder='Your Full Name' required></input>
                <input type='email' name='email' placeholder='Your Email' required></input>
                <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                <button type='submit' className='btn-btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
