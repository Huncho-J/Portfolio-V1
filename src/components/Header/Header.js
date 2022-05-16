// Import Assets
import profile from '../../assets/profile.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>

            <div className='h-left'>
             <div className='h-left-wrapper'>
                 <h2 className='h-intro'>Hello, My name is</h2>
                 <h1 className='h-name'>Jide Abatti</h1>
                 <div className='h-title'>
                     <div className='h-title-wrapper'>
                         <div className='h-title-item'>Solidity Developer</div>
                         <div className='h-title-item'>NFT Expert</div>
                         <div className='h-title-item'>Blockchain App Development</div>
                         <div className='h-title-item'>Chainlink Expert</div>

                     </div>
                 </div>
                 <p className='h-desc'>
                 Jide is a Creative and efficient blockchain developer with a background in computer science. 
                His diverse skill set ranges from Smart contract to middleware development for decentralized applications.
                 </p>
             </div> 


            </div>
            <div className='h-right'>
                <div className='h-bg'></div>
                <img src={profile} alt='profile picture' className='h-img'></img>
            </div>
        </div>
    );
}

export default Header;