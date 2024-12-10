import React, { Component } from 'react'
import Cofe from '../../component/cofe/Cofe'
import News from '../../component/news/News'
export default class Coffee extends Component {
  render () {
    return (
      <div>
        <News />
        <Cofe />
      </div>
    )
  }
}
