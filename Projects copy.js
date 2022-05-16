// Import Assets
import web3flow from '../assets/web3flow.png';
import cryptoWizards from '../assets/CryptoWiz.png';
import './projects.css'


const Projects = () => {
    return (
       

            <div className="projects__cards ">

                <div className="projects__card">
                    <h3>Web3Flow</h3>
                    <img src={web3flow} alt="web3flow Page" />
                    <p>Web3Flow is a personal token bridge project. 
                    It serves to illustrate Jide's understaning of transferring assets between blockchains.
                    Currently its setup to transfer the "test core token" from Rinkeby to polygon Mumbai testnet.
                    </p>

                    <a href="https://github.com/Huncho-J/Web3Flow#readme" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Huncho-J/Web3Flow" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Crypto Wizards V3</h3>
                    <img src={cryptoWizards} alt="Crypto wizards landing page" />
                    <p>Crypto Wizards is a NFT collection project Jide was hired to work on. 
                    Thi project consists of 500 unique NFT crypto wizards currently live on the Polygon mainnet,
                    and listed for trading on opensea.
                    </p>

                    <a href="https://opensea.io/collection/crypto-wizards-v3" target="_blank" className="button">Site</a>
                  
                </div>
            </div>
        
    );
}

export default Projects;