import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Checkout from './Checkout'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/checkout' element={<Checkout />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App