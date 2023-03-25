import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path = "projects" element={<h1>Projects</h1>} />
          <Route path = "contact" element={<h1>Contact</h1>} />
          <Route path = "resume" element={<h1>Resume</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
