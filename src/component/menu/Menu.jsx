import React, { Component } from 'react'
import './Menu.scss'
import menu1 from '../../assets/images/menu1.png'
import menu2 from '../../assets/images/menu2.png'
import menu3 from '../../assets/images/menu3.png'
import menu4 from '../../assets/images/menu4.png'
import menu5 from '../../assets/images/menu5.png'
import menu6 from '../../assets/images/menu6.png'
import menu7 from '../../assets/images/menu7.png'
import menu8 from '../../assets/images/menu8.png'
export default class Menu extends Component {
  render () {
    return (
      <section className='menyu'>
        <p>Menu</p>
        <h2>Coffee popular menu</h2>
        <div className='menu_wrapper'>
          <div className='menu__content'>
            <div className='menu_cards'>
              <img src={menu1} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu2} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu3} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu4} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
          </div>
          <div className='menu__content'>
            <div className='menu_cards'>
              <img src={menu5} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu6} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu7} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
            <div className='menu_cards'>
              <img src={menu8} alt='img' />
              <h3 className='menu_title'>Americano rosted gred</h3>
              <strong>$12:00</strong>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
