import React, { Component } from 'react'
import './Footer.scss'
import { PiArrowCircleRightFill } from 'react-icons/pi'
import footer_logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
export default class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='footer_container'>
          <NavLink to={'/'}>
            <img className='footer_logo' src={footer_logo} alt='' />
          </NavLink>
          <nav className='footer_navbar'>
            <NavLink className='footer_list' to={'/'}>
              Home
            </NavLink>
            <NavLink className='footer_list' to={'/history'}>
              History
            </NavLink>
            <NavLink className='footer_list' to={'/menyu'}>
              Menu
            </NavLink>
            <NavLink className='footer_list' to={'/about'}>
              About
            </NavLink>
            <NavLink className='footer_list' to={'/cofee'}>
              Coffe
            </NavLink>
            <NavLink className='footer_list' to={'/product'}>
              Shop
            </NavLink>
            <NavLink className='footer_list' to={'/contact'}>
              Contact
            </NavLink>
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
