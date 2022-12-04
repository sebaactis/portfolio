import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import NavBar from './components/Navbar/NavBar';
import Proyects from './components/Proyects/Proyects';
import Skills from './components/Skills/Skills';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Contact />
      <Proyects />
      <Skills />

    </div>
  );
}

export default App;
