// Import Assets
import robot from '../assets/robot.png';
import {SiBitcoin} from 'react-icons/si'

import "./about.css"

const About = () => {
    return (
        <section id = 'about'>
            <h2>About Me</h2>
            <div className='container a-left'>
                <div className='about-me'>
                    
                <div className='img-card'>
                    <img src={robot} alt="" className='a-img'></img>       
                </div> 
                
            </div>
            <div className='a-right-container'>
                <div className='about-cards'>
                    <article className='about-card'>
                        <SiBitcoin className='about-icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Work Experience</small>
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
                    Jide is a Creative and efficient blockchain developer with a background in computer science. 
                    His diverse skill set ranges from Smart contract to middleware development for decentralized applications.
                 </p> 
                 <a href='#contact' className='btn btn-primar'> Lets connect</a>
             </div>
            </div>
        </section>
        
    );
}

export default About;