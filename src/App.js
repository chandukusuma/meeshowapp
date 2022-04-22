import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import Hovernav from './components/HomePage/Hovernav';
import Home from './components/HomePage/Home';
import Silk from './components/HomePage/Silk';
import Individual from './components/Individual';
import Womenethnic from './components/Womenethnic';
import Cotton from './components/Cotton';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header />
      <Hovernav /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Silk' element={<Silk />} />
          <Route path='/single' element={<Individual />} />
          <Route path="/WomenEthnic" element={<Womenethnic />} />
          <Route path="/cotton" element={<Cotton />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
