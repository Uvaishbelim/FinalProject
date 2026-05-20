import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Checkout from './Checkout'
import Footer from './Footer'
import Copyright from './Copyright'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './Cart'
import ShopDetail from './ShopDetail'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Shopdetail' element={<ShopDetail/>}/>
      </Routes>

      <Footer/>
    <Copyright/>
    </BrowserRouter>
    </>
    
  )
}

export default App