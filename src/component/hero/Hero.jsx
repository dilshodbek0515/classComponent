import React, { Component } from 'react'
import './Hero.scss'
import { GoPlay } from 'react-icons/go'
export default class Hero extends Component {
  render () {
    return (
      <div className='hero'>
        <main className='container'>
          <div className='main_collection'>
            <div className='hero_left'>
              <h2>Enjoy Your Morning Coffee.</h2>
              <p>
                The coofee is brewed by fist roasting the green coffee beans
                over hot coals in brazier. given to Opportunity
              </p>
              <button>Test Coffee</button>
            </div>
            <div className='play'>
              <GoPlay className='play_icon' />
              <span>Play video</span>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
