import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import Home from './components/HomePage/Home';
import Silk from './components/HomePage/Silk';
import Individual from './components/Individual';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Silk' element={<Silk />} />
          <Route path='/single' element={<Individual />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
