import React, { Component } from 'react'
import Product from '../../component/product/Product'

export default class Shop extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <Product />
      </div>
    )
  }
}
