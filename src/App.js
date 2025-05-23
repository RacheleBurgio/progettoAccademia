import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyNav from './components/Navbar/Navbar'
import HeroSection from './components/Herosection/Herosection'
import Footer from './components/Footer/Footer'
import ArtistiInPortafolgio from './components/ArtistiInPortafogliio/ArtistiInPortafoglio'
import AuroraD1 from './components/AuroraD1/AuroraD1'
import ChiSiamo from './components/ChiSiamo/ChiSiamo'
import INostriCorsi from './components/INostriCorsi/INostriCorsi'
import SpettacoliEventi from './components/SpettacoliEventi/SpettacoliEventi'
import Etichetta from './components/Etichetta/Etichetta'
import StudioDiRegistrazione from './components/StudioDiRegistrazione/StudioDiRegistrazione'
import CasaSanremo from './components/CasaSanremo/CasaSanremo'
import Login from './components/login/login'
import Artisti from './components/Artisti/Artisti'
import FestivalOfSong from './components/FestivalOfSong/FestivalOfSong'
import Giornalisti from './components/Giornalisti/Giornalisti'
import Maestri from './components/Maestri/Maestri'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/ros-41.png?v=2" type="image/png" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <MyNav />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route
            path="/ArtistiInPortafoglio"
            element={<ArtistiInPortafolgio />}
          />
          {/* <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/nostricorsi" element={<INostriCorsi />} />
          <Route path="/spettacolieventi" element={<SpettacoliEventi />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/etichetta" element={<Etichetta />} />
          <Route
            path="/studioDiRegistrazione"
            element={<StudioDiRegistrazione />}
          />
          <Route path="/casasanremolivebox" element={<CasaSanremo />} />
          <Route path="/artisti" element={<Artisti />} />
          <Route path="/festivalofsong" element={<FestivalOfSong />} />
          <Route path="/giornalisti" element={<Giornalisti />} />
          <Route path="/maestri" element={<Maestri />} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
