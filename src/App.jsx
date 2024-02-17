import Navbar from "./Shared/Navbar"
import "./App.css"
import Header from "./component/Header"
import RecomendedFood from "./component/RecomendedFood"
import Aboutus from "./component/Aboutus"
import NewFood from "./component/NewFood"
import AboutChiefs from "./component/AboutChiefs"
import SpecialFood from "./component/SpecialFood"
import Footer from "./component/Footer"

function App() {


  return (
    <>
      <Navbar/>
      <Header/>
      <RecomendedFood/>
      <Aboutus/>
      <NewFood/>
      <AboutChiefs/>
      <SpecialFood/>
      <Footer/>
    </>
  )
}

export default App
