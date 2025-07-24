// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/home';
import About from './components/About';
import Education from './components/education';
import Project from './components/projects';
import Speed from'./components/speed'
import './App.css';

function App() {
  return (
    <div className=" absolute h-screen w-screen right-0 overflow-x-hidden ">
   <Navbar/>
      {/* <main className="pt-24"> offset for fixed navbar */}
        <Hero />
        <About />
        <Education/>
        <Project/>
        <Speed/>
      {/* </main> */}
    </div>
  );
}

export default App;
