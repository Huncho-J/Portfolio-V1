import './footer.css'
import {AiFillTwitterCircle,AiFillLinkedin, AiFillThunderbolt, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="footer">
            <a href='#' className='footer-logo'>Jide</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Expertise</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='footer-socials'>
                <a href=''><AiFillGithub></AiFillGithub></a>
                <a href=''><AiFillLinkedin></AiFillLinkedin></a>
                <a href=''><AiFillThunderbolt></AiFillThunderbolt></a>
                <a href=''><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
            <small className='footer-cr'>Jide Abatti &copy; 2022</small>
        </footer>
    );
}

export default Footer;