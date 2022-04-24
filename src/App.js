import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import Hovernav from './components/HomePage/Hovernav';
import Womens from './components/Womens';
import Home from './components/HomePage/Home';
import Silk from './components/HomePage/Silk';
import Individual from './components/Individual';
import Womenethnic from './components/Womenethnic';
import Cotton from './components/Cotton';
import Signup from './components/Signup';
import Footer from './components/HomePage/Footer';
import Cart from './components/Cart';
import Topwear from './components/Topwear';
import Bottomwear from './components/Bottomwear';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Hovernav ></Hovernav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/Silk' element={<Silk />} />
          <Route path='/single' element={<Individual />} />
          <Route path="/WomenEthnic" element={<Womenethnic />} />
          <Route path="/cotton" element={<Cotton />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Women' element={<Womens />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Topwear" element={<Topwear />} />
          <Route path="/Bottomwear" element={<Bottomwear />} />
        </Routes>
    <Footer />
    </>
  );
}

export default App;
