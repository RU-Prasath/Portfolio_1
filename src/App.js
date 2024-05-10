import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </div>
    <Footer />
    </>
  );
}

export default App;
