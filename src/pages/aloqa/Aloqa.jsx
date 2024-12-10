import React, { Component } from 'react'
import Contact from '../../component/contact/Contact'
export default class Aloqa extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <Contact />
      </div>
    )
  }
}
