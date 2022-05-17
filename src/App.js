// Import Components
import Header from './components/Header/Header';
import About from './components/About';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Projects from './components/projectList/Projects';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className="App">
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
