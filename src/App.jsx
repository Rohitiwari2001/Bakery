import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
