import React from 'react'
import {connect} from "react-redux"

import Header from './Header'
import Info from './Info'
import Gallery from './Gallery'
import ConocerMas from './ConocerMas'
import MasInfo from './MasInfo'
import Carousel from './Carousel'
import Footer from './Footer'

const theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)'
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1
    }
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15
    }
  },
  arrow__direction__left: {
    marginLeft: 10
  },
  arrow__direction__right: {
    marginRight: 10
  },

  // header
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',

    ':hover': {
      opacity: 1
    }
  },

  // footer
  footer: {
    color: 'black'
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)'
  },

  // thumbnails
  thumbnail: {},
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF'
  }
};

@connect((store) => {
  return {}
})
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let images = [
      {
        url: "http://via.placeholder.com/1850x550"
      }, {
        url: "http://via.placeholder.com/1856x550"
      }, {
        url: "http://via.placeholder.com/1852x550"
      }
    ]
    let images2 = [
      {
        id: '010101',
        caption: "adasd",
        src: "https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/img/gallery/01.jpg",
        thumbnail: "https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/img/gallery/01_391.jpg"
      }, {
        id: '020202',
        caption: "adasd",
        src: "https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/img/gallery/02.jpg",
        thumbnail: "https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/img/gallery/02_361.jpg"
      }, {
        id: '030303',
        caption: "adasd",
        src: "http://via.placeholder.com/1852x550",
        thumbnail: "http://via.placeholder.com/400x400"
      }
    ]
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="main container-fluid">
          <Carousel images={images}/>
          <Info/>
          <ConocerMas/>
          <MasInfo/>
          <Gallery images={images2}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
