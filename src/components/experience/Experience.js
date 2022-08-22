import './experience.css'
import {FaReact, FaNodeJs, FaNode} from 'react-icons/fa'
import {MdOutlineVerified} from 'react-icons/md'
const Experience = () => {
    return (
     <section id='experience'>
         <h5>Current Skillset</h5>
         <h2>Technologies</h2>
         <div className='container exp-container'>
             <div className='exp-frontend'>
                <h3>Frontend Development</h3>
                <div className='exp-content'>
                    <article className='exp-details'>
                        <FaReact className='exp-icons'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='exp-details'>
                        <MdOutlineVerified className='exp-icons'/>
                        <div>
                        <h4>Next.js</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
             </div>
             <div className='exp-backend'>
             <h3>Backend Development</h3>
                <div className='exp-content'>
                    <article className='exp-details'>
                        <FaNode className='exp-icons'/>
                      <div>
                      <h4>NodeJs</h4>
                        <small className='text-light'>Expert</small>
                      </div>
                    </article>
                    <article className='exp-details'>
                        <MdOutlineVerified className='exp-icons' />
                        <div>
                        <h4>Hardhat</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                    </article>
                    <article className='exp-details'>
                    <FaNodeJs className='exp-icons'/>
                        <div>
                        <h4>Javascript</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                    </article>
                    <article className='exp-details'>
                        <MdOutlineVerified className='exp-icons' />
                        <div>
                        <h4>Chainlink</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                    </article>
                    <article className='exp-details'>
                        <MdOutlineVerified className='exp-icons'/>
                        <div>
                        <h4>Solidity</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                    </article>
                    <article className='exp-details'>
                        <MdOutlineVerified className='exp-icons'/>
                        <div>
                        <h4>Polygon</h4>
                        <small className='text-light'>Expert</small>
                        </div>
                    </article>
                 </div>
             </div>
         </div>
     </section>
    );
}

export default Experience;