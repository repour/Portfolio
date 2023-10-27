import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Repour</a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/reza.poorsadeghi"><FaFacebookF /></a>
        <a href="https://www.instagram.com/poorsadeghi"><BsInstagram /></a>
        <a href="https://twitter.com/RoReporsai"><BsTwitter /></a>
      </div>

    </footer>
  )
}

export default Footer