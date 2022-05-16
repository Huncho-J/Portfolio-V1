// Import Assets

import './projectList.css'
import Project from '../project/Project'
import {projects} from '../../data'


const Projects = () => {
    return (
       
            <section id='projects'>
                <h5>Some of my Recent Work</h5>
                <h2>Portfolio Projects</h2>
                <div className="container works-container">
                {
                    projects.map(({id, image, title, link}) => {
                        return(
                            <article key={id} className='works-item'>
                                <div className='works-item-img'>
                                 <img src={image} alt={title}/>
                                     <h3>{title}</h3>
                               <div className='btn-cta'>
                                    <a href={link} className='btn'>Github Code</a>
                                    <a href={link} className='btn btn-primary' target='blank'>Live Demo</a>
                                  </div>
                            </div>
                 </article>
                   )
                    })
                }
              
               </div>
            </section>
        
    );
}

export default Projects;