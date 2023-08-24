import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

const app = () => {
  return <>
  <div className='container'>
  <header>
    <nav>

  <Navbar />
    </nav>
  </header>
  <main>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/cart' element={<Cart />}/>
  </Routes>
  </main>
  </div>
  </>;
};

export default app