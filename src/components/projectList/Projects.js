// Import Assets

import './projectList.css'
import {projects} from '../../data'


const Projects = () => {
    return (
       
            <section id='projects'>
                <h5>Some of my Recent Works</h5>
                <h2>Portfolio Projects</h2>
                <div className="container works-container">
                {
                    projects.map(({id, image, title, link,code, description}) => {
                        return(
                            <article key={id} className='works-item'>
                                <div className='works-item-img'>
                                 <img src={image} alt={title}/>
                                     <h3>{title}</h3>
                                     <h5>{description}</h5>
                               <div className='btn-cta'>
                                    <a href={code} className='btn btn-primary' target='blank'>Github Code</a>
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