import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {LiaTelegramPlane} from 'react-icons/lia'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('r.poursadeghi', 'template_c6l5fbb', form.current, 'halEZKT4yiFg2AZNy')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>r.poorsadeghi@gmail.com</h5>
            <a href="mailto:r.poorsadeghi@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+989305760450</h5>
            <a href="https://wa.me/+989305760450" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <LiaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@Repors</h5>
            <a href="https://t.me/Repors" target='blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'/>
          <input type="email" name='email' placeholder='Your Email'/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact