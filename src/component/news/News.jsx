import React, { Component } from 'react'
import './News.scss'
import new1 from '../../assets/images/New1.png'
import new2 from '../../assets/images/New2.png'
import new3 from '../../assets/images/New3.png'
import { FaArrowRightLong } from 'react-icons/fa6'
export default class News extends Component {
  render () {
    return (
      <section className='news'>
        <p>Testimonial</p>
        <h2>Our latest news</h2>
        <div className='news_wrapper'>
          <div className='news_card'>
            <img className='news_img' src={new1} alt='img' />
            <div className='news_date'>
              <p className='rasaline'>
                By: <span>rasaline</span>
              </p>
              <p className='date'>23.01.2021</p>
            </div>
            <h3 className='news_title'>Ideal cocktails from barmen....</h3>
            <button className='more'>
              Read More <FaArrowRightLong className='n_arrow' />
            </button>
          </div>
          <div className='news_card'>
            <img className='news_img' src={new2} alt='img' />
            <div className='news_date'>
              <p className='rasaline'>
                By: <span>rasaline</span>
              </p>
              <p className='date'>23.01.2021</p>
            </div>
            <h3 className='news_title'>Ideal cocktails from barmen....</h3>
            <button className='more'>
              Read More <FaArrowRightLong className='n_arrow' />
            </button>
          </div>
          <div className='news_card'>
            <img className='news_img' src={new3} alt='img' />
            <div className='news_date'>
              <p className='rasaline'>
                By: <span>rasaline</span>
              </p>
              <p className='date'>23.01.2021</p>
            </div>
            <h3 className='news_title'>Ideal cocktails from barmen....</h3>
            <button className='more'>
              Read More <FaArrowRightLong className='n_arrow' />
            </button>
          </div>
        </div>
      </section>
    )
  }
}
