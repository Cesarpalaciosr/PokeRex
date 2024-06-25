import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Poke from './pages/poketest';
import AboutPage from './pages/aboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/test" element={ <Poke/>} />
          <Route path="/about" element={ <AboutPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App