import './footer.css'
import {AiFillTwitterCircle,AiFillLinkedin, AiFillThunderbolt, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="footer">
            <a href='#' className='footer-logo'>Jide</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#expertise'>Expertise</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer-socials'>
                <a href='https://github.com/Huncho-J'><AiFillGithub></AiFillGithub></a>
                <a href='https://www.linkedin.com/in/olajide-abatti-jr-410361126'><AiFillLinkedin></AiFillLinkedin></a>
                <a href='https://hire.scoutible.com/profile/share/ag9zfnNjb3V0aWJsZS1hcHByEQsSBFVzZXIYgICg0O-ViwoM'><AiFillThunderbolt></AiFillThunderbolt></a>
                <a href='https://twitter.com/blair_baba'><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
            <small className='footer-cr'>Jide Abatti &copy; 2022</small>
        </footer>
    );
}

export default Footer;