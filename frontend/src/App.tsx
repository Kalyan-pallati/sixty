import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact'
import Products from './pages/Products';
import ScrolltoTop from './components/ScrolltoTop';
import ProductPreview from './pages/ProductPreview';
function App() {

  return (
    <>
      <Router>
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/id" element={<ProductPreview />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
