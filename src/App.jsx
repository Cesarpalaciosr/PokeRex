import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Poke from './pages/poketest';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/test" element={ <Poke/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App