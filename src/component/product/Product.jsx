import React, { Component } from 'react'
import './Product.scss'
import axios from 'axios'
import { LuShoppingBag } from 'react-icons/lu'
export default class Product extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }
  componentDidMount () {
    axios
      .get('https://dummyjson.com/products')
      .then(res => this.setState({ data: res.data.products }))
      .catch(err => console.log(err))
      .finally()
  }
  render () {
    return (
      <section className='product'>
        <p>Popular Product</p>
        <h2>Coffee popular Product</h2>
        <div>
          {this.state.data?.slice(18, 21)?.map(pro => (
            <div className='pro_card' key={pro.id}>
              <img src={pro.images[0]} alt='' />
              <h3>{pro.title}</h3>
              <strong>Price: {pro.price} $</strong>
              <button className='cart'>
                <LuShoppingBag className='bag' /> Add to cart
              </button>
            </div>
          ))}
        </div>
        <button>View all product</button>
      </section>
    )
  }
}
