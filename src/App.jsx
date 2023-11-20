import './App.css';

// 1- config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
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
          {/* no match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
