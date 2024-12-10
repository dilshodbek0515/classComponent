import React from 'react'
import Hero from '../../component/hero/Hero'
import Cofe from '../../component/cofe/Cofe'
import History from '../../component/history/History'
import Product from '../../component/product/Product'
import Menu from '../../component/menu/Menu'
import Test from '../../component/test/Test'
import Machine from '../../component/machine/Machine'
import Contact from '../../component/contact/Contact'
import News from '../../component/news/News'
const Home = () => {
  return (
    <div>
      <Hero />
      <Cofe />
      <History />
      <Product />
      <Machine />
      <Menu />
      <Test />
      <Contact />
      <News />
    </div>
  )
}

export default Home
