import React, { Component } from 'react'
import './Cofe.scss'
import cofe1 from '../../assets/images/cofe1.png'
import cofe2 from '../../assets/images/cofe2.png'
import cofe3 from '../../assets/images/cofe3.png'
export default class Cofe extends Component {
  render () {
    return (
      <div className='cofe_container'>
        <div>
          <div className='cofe_top'>
            <p>01</p>
            <h3>Best Coffee Flavour</h3>
          </div>
          <img src={cofe1} alt='img' />
        </div>
        <div>
          <div className='cofe_top'>
            <p>02</p>
            <h3>Place to get lost</h3>
          </div>
          <img src={cofe2} alt='img' />
        </div>
        <div>
          <div className='cofe_top'>
            <p>03</p>
            <h3>Proper roesting</h3>
          </div>
          <img src={cofe3} alt='img' />
        </div>
      </div>
    )
  }
}
