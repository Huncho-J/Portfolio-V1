// Import Assets
import about from '../../assets/about.png';
import {SiBitcoin} from 'react-icons/si'

import "./about.css"

const About = () => {
    return (
        <section id = 'about'>
            <h2>About Me</h2>
            <div className='container a-left'>
                <div className='about-me'>
                    
                <div className='img-card'>
                    <img src={about} alt="" className='a-img'></img>       
                </div> 
                
            </div>
            <div className='a-right-container'>
                <div className='about-cards'>
                    <article className='about-card'>
                        <SiBitcoin className='about-icon' />
                        <h5>Experience</h5>
                        <small>4+ Years Work Experience</small>
                    </article>
                    <article className='about-card'>
                        <SiBitcoin className='about-icon' />
                        <h5>Education</h5>
                        <small>DePaul university<br>
                        </br>Computer Science.</small>

                    </article>
                    <article className='about-card'>
                        <SiBitcoin className='about-icon' />
                        <h5>Certification</h5>
                        <small>Blockchain security Expert<br></br> 101 Blockchains</small>

                    </article>
                </div>
                <p className='about-desc'>
                    Hi, my name is Jide. I'm a creative and efficient software developer 
                    specializng in building (and occassionally designing) blockchain powered applications. 
                    I'm currently focused on buildling enterprise level applications using distributed ledger Technologies &
                    smart contracts.
                 </p> 
                 <a href='#contact' className='btn btn-primary'> Lets connect!</a>
             </div>
            </div>
        </section>
        
    );
}

export default About;