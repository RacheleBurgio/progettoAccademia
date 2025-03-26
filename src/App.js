import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/Herosection'
import Footer from './components/Footer/Footer'
import ChiSiamo from './components/ChiSiamo/ChiSiamo'
import INostriCorsi from './components/INostriCorsi/INostriCorsi'
import SpettacoliEventi from './components/SpettacoliEventi/SpettacoliEventi'
import Etichetta from './components/Etichetta/Etichetta'
import StudioDiRegistrazione from './components/StudioDiRegistrazione/StudioDiRegistrazione'
import AdminLocandine from './components/SpettacoliEventi/AdminLocandine'

import Login from './components/login/login'

function App() {
  const userRole = localStorage.getItem('role')
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/nostricorsi" element={<INostriCorsi />} />
        <Route path="/spettacolieventi" element={<SpettacoliEventi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/etichetta" element={<Etichetta />} />
        <Route
          path="/studioDiRegistrazione"
          element={<StudioDiRegistrazione />}
        />
        <Route
          path="/admin/locandine"
          element={
            userRole === 'ADMIN' ? <AdminLocandine /> : <Navigate to="/" />
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
