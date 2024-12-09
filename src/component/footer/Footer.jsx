import React, { Component } from 'react'
import './Footer.scss'
import { PiArrowCircleRightFill } from 'react-icons/pi'
import footer_logo from '../../assets/images/Logo.svg'
export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='footer_container'>
          <a href=''>
            <img className='footer_logo' src={footer_logo} alt='' />
          </a>
          <nav className='footer_navbar'>
            <li>Home</li>
            <li>Rerervation</li>
            <li>Menu</li>
            <li>About</li>
            <li>Pages</li>
            <li>Shop</li>
            <li>Blogs</li>
          </nav>
          <form action='' className='footer_forma'>
            <input type='email' placeholder='Enter your email' />
            <PiArrowCircleRightFill className='footer_icon' />
          </form>
        </div>
      </footer>
    )
  }
}
