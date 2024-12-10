import React, { Component } from 'react'
import './Test.scss'
import test1 from '../../assets/images/test1.png'
import test2 from '../../assets/images/test2.png'
import { IoStarSharp } from 'react-icons/io5'
export default class Test extends Component {
  render () {
    return (
      <section className='test'>
        <p>Testimonial</p>
        <h2>Says our customers</h2>
        <div className='test_wrapper'>
          <div className='test_cards'>
            <div className='card_coll'>
              <img src={test1} alt='img' />
              <p>
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className='card_coll'>
              <div className='card_name'>
                <p>John Smith</p>
                <span>Product Designer</span>
              </div>
              <div className='star_content'>
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
              </div>
            </div>
          </div>
          <div className='test_cards'>
            <div className='card_coll'>
              <img src={test2} alt='img' />
              <p>
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className='card_coll'>
              <div className='card_name'>
                <p>Brett Lee</p>
                <span>User Experience Designer</span>
              </div>
              <div className='star_content'>
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
              </div>
            </div>
          </div>
          <div className='test_cards'>
            <div className='card_coll'>
              <img src={test1} alt='img' />
              <p>
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className='card_coll'>
              <div className='card_name'>
                <p>John Smith</p>
                <span>Product Designer</span>
              </div>
              <div className='star_content'>
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
              </div>
            </div>
          </div>
          <div className='test_cards'>
            <div className='card_coll'>
              <img src={test2} alt='img' />
              <p>
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className='card_coll'>
              <div className='card_name'>
                <p>Brett Lee</p>
                <span>User Experience Designer</span>
              </div>
              <div className='star_content'>
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
                <IoStarSharp className='star' />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
