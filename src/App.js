import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/Herosection'
import Footer from './components/Footer/Footer'
import ChiSiamo from './components/ChiSiamo/ChiSiamo'
import INostriCorsi from './components/INostriCorsi/INostriCorsi'
import SpettacoliEventi from './components/SpettacoliEventi/SpettacoliEventi'

import Login from './components/login/login'

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/nostricorsi" element={<INostriCorsi />} />
        <Route path="/spettacolieventi" element={<SpettacoliEventi />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
