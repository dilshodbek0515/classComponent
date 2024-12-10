import React, { Component } from 'react'
import History from '../../component/history/History'
export default class Historiya extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <History />
      </div>
    )
  }
}
