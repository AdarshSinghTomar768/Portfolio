import './App.css';
import Portfolio from './components/Portfolio'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
    return (
      <div>
        <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
      </div>
    );
}

export default App;
