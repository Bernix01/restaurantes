import React from 'react'
import {connect} from "react-redux"

import Header from './Header'
import Info from './Info'
import ConocerMas from './ConocerMas'
import Carousel from './Carousel'
import Footer from './Footer'

@connect((store) => {
  return {}
})
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let images = [
      {url:"http://via.placeholder.com/1850x550"},
      {url:"http://via.placeholder.com/1856x550"},
      {url:"http://via.placeholder.com/1852x550"},
    ]
    return (
      <div>
        <Header/>
        <div className="row container-fluid">
        <Carousel images={images}/>
        </div>
        <Info/>
        <ConocerMas/>
        <Footer/>
      </div>
    )
  }
}
