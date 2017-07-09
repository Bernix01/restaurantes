import React from 'react'
import {connect} from "react-redux"

// import '../actions/gallery'
import Header from './Header'
import Info from './Info'
import Gallery from './Gallery'
import ConocerMas from './ConocerMas'
import MasInfo from './MasInfo'
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
        <MasInfo/>
        <Gallery/>
        <Footer/>
      </div>
    )
  }
}
