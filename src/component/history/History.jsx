import React, { Component } from 'react'
import './History.scss'
import his1 from '../../assets/images/cofe1.png'
import his2 from '../../assets/images/cofe2.png'
import his3 from '../../assets/images/his.png'
export default class History extends Component {
  render () {
    return (
      <div className='history_container'>
        <div className='history_card1'>
          <img src={his2} alt='img' />
          <img src={his1} alt='img' />
        </div>
        <img className='history_card2' src={his3} alt='img' />
        <div className='history_card3'>
          <p className='history_card3_text'>Our history</p>
          <h3>Create a new story with us</h3>
          <p className='history_card3_desc'>
            mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit
            ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt.
            donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis
            quam venen atis fringilla. morbi vastibulum id tells mmodo mattis.
            aliauam erat volutpal.
          </p>
        </div>
      </div>
    )
  }
}
