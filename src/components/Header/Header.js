
import './header.css';

const Header = () => {
    return (
        
            <section id='home'>
                  <div id='home' className='container h-left'>
             <div className='h-left-wrapper'>
                 <h2 className='h-intro'>Welcome, My name is</h2>
                 <h1 className='h-name'>Jide Abatti</h1>
                 <div className='h-title'>
                     <div className='h-title-wrapper'>
                         <div className='h-title-item'>Smart Contract Developer</div>
                         <div className='h-title-item'>NFT Expert</div>
                         <div className='h-title-item'>Blockchain App Development</div>
                     </div>
                 </div>
                 <a href='#contact' className='btn btn-primary'> Lets connect !</a>
             </div> 
             
            </div>
            

            </section>
          


       
        
    );
}

export default Header;