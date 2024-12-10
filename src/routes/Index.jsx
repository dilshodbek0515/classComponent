import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Shop from '../pages/shop/Shop'
import Menyu from '../pages/menyu/Menyu'
import History from '../pages/historiya/Historiya'
import Coffee from "../pages/coffee/Coffee"
import Aloqa from "../pages/aloqa/Aloqa"
const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menyu' element={<Menyu />} />
        <Route path='/history' element={<History />} />
        <Route path='/product' element={<Shop />} />
        <Route path='/cofee' element={<Coffee />} />
        <Route path='/contact' element={<Aloqa />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Index
