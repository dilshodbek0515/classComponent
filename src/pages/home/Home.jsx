import React, { Component } from 'react'
import Hero from '../../component/hero/Hero'
import Cofe from '../../component/cofe/Cofe'
import History from '../../component/history/History'
import Product from '../../component/product/Product'
import Menu from '../../component/menu/Menu'
import Test from '../../component/test/Test'
import Machine from '../../component/machine/Machine'
import Contact from '../../component/contact/Contact'
import News from '../../component/news/News'
export default class Home extends Component {
  render () {
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
}
