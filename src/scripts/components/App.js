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

function makeUnsplashSrc (id) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

const DEFAULT_IMAGES = [
	{ id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

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
    let images2 = [
      {src:"http://via.placeholder.com/1850x550", srcset:["http://via.placeholder.com/1024x305 1024"]},
      {src:"http://via.placeholder.com/1856x550", srcset:["http://via.placeholder.com/1024x305 1024"]},
      {src:"http://via.placeholder.com/1852x550", srcset:["http://via.placeholder.com/1024x305 1024"]},
    ]
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="container-fluid">
        <Carousel images={images}/>
        <Info/>
        <ConocerMas/>
        <MasInfo/>
        <p> Antes </p>
        {/*<Gallery images={DEFAULT_IMAGES.map(({id, orientation, useForDemo }) => ({
            src: makeUnsplashSrc(id),
            thumbnail: makeUnsplashThumbnail(id, orientation),
            srcset: [
              makeUnsplashSrcSet(id, 1024),
              makeUnsplashSrcSet(id, 800),
              makeUnsplashSrcSet(id, 500),
              makeUnsplashSrcSet(id, 320),
            ],
            orientation,
            useForDemo,
          }))} />*/}

        <Gallery images={images2}/>
        <p> Después </p>
        <Footer/>
        </div>
      </div>
    )
  }
}
