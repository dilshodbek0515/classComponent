import React, { Component } from 'react'
import './Header.scss'
import { CiSearch } from 'react-icons/ci'
import { FiShoppingBag } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'
import { IoArrowUpCircle } from 'react-icons/io5'
import logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
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
              <NavLink className='navbar_list' to={'/'}>
                Home
              </NavLink>
              <NavLink className='navbar_list' to={'/about'}>
                About
              </NavLink>
              <NavLink to={'/menyu'} className='navbar_list'>
                Menu
              </NavLink>
              <NavLink to={'/history'} className='navbar_list'>
                History
              </NavLink>
            </ul>
          </nav>
          <a href='#'>
            <img className='logo' src={logo} alt='img' />
          </a>
          <nav className='navbar_left'>
            <ul>
              <NavLink to={"/cofe"} className='navbar_list'>Coffe</NavLink>
              <NavLink to={'/product'} className='navbar_list'>
                Shop
              </NavLink>
              <li className='navbar_list'>Contact</li>
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
