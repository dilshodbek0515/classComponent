import React, { Component } from 'react'
import './Loading.scss'
export default class Loading extends Component {
  render () {
    return (
      <div class='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
