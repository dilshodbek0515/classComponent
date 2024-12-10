import React, { Component } from 'react'
import Cofe from '../../component/cofe/Cofe'
import News from '../../component/news/News'
export default class Coffee extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div>
        <News />
        <Cofe />
      </div>
    )
  }
}
