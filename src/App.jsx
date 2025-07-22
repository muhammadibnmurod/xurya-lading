import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Discover from './components/Discover-over/Discover'
import OfferQuality from './components/Offer-Quality/OfferQuality'
import TrustService from './components/TrustSecrive/TrustService'
import MedtronicCaseStudy from './components/Medtronic Case Study/MedtronicCaseStudy'
import Footer from './components/Footer/Footer'

function App() {

  return (
   <BrowserRouter>
        <Header/>
        <Discover/>
        <OfferQuality/>
        <TrustService/>
        <MedtronicCaseStudy />
        <Footer/>
   </BrowserRouter>
  )
}

export default App
