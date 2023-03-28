import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
 import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path = "projects" element={<Projects/>} />
          <Route path = "contact" element={<Contact/>} />
          <Route path = "experience" element={<Experience/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
