// Import Components
import Navbar from './components/navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Projects from './components/projectList/Projects';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';


function App() {

	
	return (
		
		<div className="App">
			
			<Navbar></Navbar>
			<Header />
			<About />
			<Experience />
			<Services />
			<Projects/>
			<Contact />
			<Footer/>
		</div>
	);
}

export default App;
