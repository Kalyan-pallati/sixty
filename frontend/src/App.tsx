import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
