import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/Herosection'
import Presentazione from './components/Collegamento/Collegamento'
import Collegamento from './components/Collegamento/Collegamento'

function App() {
  return (
    <Router>
      <MyNav />
      {/* Aggiungi HeroSection e Presentazione solo nella Home */}
      <MainContent />
    </Router>
  )
}

// Separare il contenuto principale per gestire la logica della Home
function MainContent() {
  const location = useLocation() // Ottieni il percorso corrente

  return (
    <>
      {/* Mostra HeroSection e Presentazione solo se il percorso è "/" o "/Home" */}
      <>
        <HeroSection />
        <Collegamento />
      </>
    </>
  )
}

export default App
