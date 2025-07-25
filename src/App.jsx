// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/home';
import About from './components/About';
import Education from './components/education';
import Project from './components/projects';
import Speed from'./components/speed'
import Skill from './components/skill'
import SoftSkills from './components/softskill';
import Contacts from './components/contact';
import A from './components/acheive'
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
        <Skill/>
        <A/>
        <SoftSkills />
        <Contacts/>
      {/* </main> */}
    </div>
  );
}

export default App;
