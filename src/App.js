import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from './components/footer/Footer.jsx';
import Home from './components/home-page/Home-page.jsx';
import ProjectSection from './components/projectSection/ProjectSection.jsx';
import About from './components/about/About.jsx';

function App() {
  return (
    <div>
    <Header />
    <Home />
    <ProjectSection />
    <About />
    <Footer />
    </div>
  )
 
  
}

export default App;
