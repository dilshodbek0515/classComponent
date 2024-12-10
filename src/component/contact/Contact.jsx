import React, { Component } from 'react'
import './Contact.scss'
import location from '../../assets/images/locatsiya.png'
export default class Contact extends Component {
  render () {
    return (
      <section>
        <div className='contact'>
          <a
            href="https://www.google.com/maps/place/Najot+Ta'lim+Chilonzor+Filial/@41.2850718,69.2038693,825m/data=!3m1!1e3!4m6!3m5!1s0x38ae8ba578f4f58d:0xd7a2ecf23413b7a0!8m2!3d41.2855142!4d69.2038126!16s%2Fg%2F11nms27h2f?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
            className='map'
          >
            <img src={location} alt='img' />
          </a>
          <div className='table'>
            <p>Reservation</p>
            <h2>Booking a table</h2>
            <form action='' className='table_form'>
              <input type='text' required placeholder='4 person' />
              <input type='date' required placeholder='12.25, 2020' />
              <input type='text' required placeholder='11:00 AM' />
              <button>BOOKS TABLE</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
