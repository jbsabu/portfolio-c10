import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from "./components/Gallery"
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Gallery/>
        <Skill/>
        <Footer/>
    </div>
  );
}

export default App;
