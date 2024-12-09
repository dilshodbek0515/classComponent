import React, { Component } from 'react'
import './Header.scss'
import { CiSearch } from 'react-icons/ci'
import { FiShoppingBag } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'
import { IoArrowUpCircle } from 'react-icons/io5'
import logo from '../../assets/images/Logo.svg'
export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      topIcon: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ topIcon: true })
    } else {
      this.setState({ topIcon: false })
    }
  }
  render () {
    return (
      <div className='header_collection'>
        <header>
          <nav className='navbar_left'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
            </ul>
          </nav>
          <a href='#'>
            <img className='logo' src={logo} alt='img' />
          </a>
          <nav className='navbar_left'>
            <ul>
              <li>Pages</li>
              <li>Shop</li>
              <li>Contact</li>
              <CiSearch className='nav_icons' />
              <FiShoppingBag className='nav_icons' />
            </ul>
          </nav>
          <IoMenu className='sidebar' />
        </header>
        {this.state.topIcon && (
          <a href='#'>
            <IoArrowUpCircle className='top' />
          </a>
        )}
      </div>
    )
  }
}
