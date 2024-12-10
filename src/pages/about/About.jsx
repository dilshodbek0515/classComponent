import React, { Component } from 'react'
import Test from '../../component/test/Test'
import Machine from '../../component/machine/Machine'
export default class About extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <Test />
        <Machine />
      </div>
    )
  }
}
