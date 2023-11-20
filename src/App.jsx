import './App.css';

// 1- config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

// Components
import Navbar from './components/Navbar';
import Info from './pages/info';

function App() {
  return (
    <div  className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* nested route */}
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
