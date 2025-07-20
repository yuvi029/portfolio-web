// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="w-screen  m-0 p-0 ">
   <Navbar/>
      {/* <main className="pt-24"> offset for fixed navbar */}
        <Hero />
        <About />
      {/* </main> */}
    </div>
  );
}

export default App;
