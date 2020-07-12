import React, { Component } from 'react'
import Headline from './component/Headline'
import Headlinesecond from './component/Headlinesecond'
import Sectionthird_img from './component/Sectionthird_img'
import Dealsoftheday from './component/Dealsoftheday'
import Fourthsection from './component/Fourthsection'
import Fifthsection from './component/Fifthsection'
import Sixthsection from './component/Sixthsection'
import Seventhsection from './component/Seventhsection'
import Bottomsection from './component/Bottomsection'

export default class App extends Component {
  render() {
    return (
      <div>
          <Headline/>
          <Headlinesecond/>
          <Sectionthird_img/>
          <Dealsoftheday/>
          <Fourthsection/>
          <Fifthsection/>
          <Sixthsection/>
          <Seventhsection/>
          <Bottomsection/>
      </div>
    )
  }
}