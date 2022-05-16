// Import Assets

import './projects.css'



const Project = ({img,link}) => {
    return (
       

            <div className="p">
             <div className='p-browser'>
                <div className='p-circle'></div> 
                <div className='p-circle'></div> 
                <div className='p-circle'></div> 
             </div>

              <a href={link} target="blank" rel="norefrence">
                  <img src={img} alt="" className= 'p-img'/>
                </a>
            </div>
        
    );
}

export default Project;