import React, { Component } from 'react'
import Menu from '../../component/menu/Menu'
export default class Menyu extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <Menu />
      </div>
    )
  }
}
