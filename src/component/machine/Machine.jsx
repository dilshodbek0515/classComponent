import React, { Component } from 'react'
import './Machine.scss'
import machine from '../../assets/images/machine.png'
export default class Machine extends Component {
  render () {
    return (
      <section>
        <div className='machine'>
          <img className='machine_img' src={machine} alt='machine_img' />
          <div className='machine_right'>
            <h3 className='machine_title'>
              Coffee <br /> machine, buy for home
            </h3>
            <p className='machine_desc'>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent
              ut quam quis quam venen atis fri ngilla. morbi vastibulum id tells
              mmodo mattis. aliauam erat volutpal.
            </p>
            <button className='machine_btn'>Discover now</button>
          </div>
        </div>
      </section>
    )
  }
}
