import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeatursSection from './FeatursSection'
import FruitsShop from './FruitsShop'
import Featurs from './Featurs'
import VesitableShop from './VesitableShop'
import BannerSection from './BannerSection'
import BestsalerProduct from './BestsalerProduct'
import Fact from './Fact'
import Tastimonial from './Tastimonial'
import Footer from './Footer'
import Copyright from './Copyright'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatursSection/>
      <FruitsShop/>
      <Featurs/>
      <VesitableShop/>
      <BannerSection/>
      <BestsalerProduct/>
      <Fact/>
      <Tastimonial/>
      <Footer/>
      <Copyright/>
      
    </>
  )
}

export default App
