import React from 'react'

import Header from './Header'


export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  hola(){
    alert("hola k ace")
  }

  render() {
    let {images} = this.props
    console.log(images)
    return (
      <div>
        {/*<p>{images.toString()}</p>*/}
      <div id="myCarousel" class="carousel slide" onClick={this.hola} data-ride="carousel">
        <ol class="carousel-indicators">
          {images.map((image, index) => {
            if (index == 0) 
              return <li data-target="#myCarousel" data-slide-to={index} key={index} class="active"></li>
            return <li data-target="#myCarousel" data-slide-to={index} key={index}></li>
          })}
        </ol>

        <div class="carousel-inner">
          {images.map((image, index) => {
            if(index == 0)
            return (
              <div class="item active" key={index}>
                <img src={image.url} alt={index}/>
              </div>
            )
            console.log(image.url)
            return (
              <div class="item" key={index}>
                <img src={image.url} alt={index}/>
              </div>
            )
          })}
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
  }
}
