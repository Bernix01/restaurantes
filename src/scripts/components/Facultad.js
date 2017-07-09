import React from 'react'
import {Link} from 'react-router'
import axios from 'axios';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer'

import Header from './Header'
import Footer from './Footer'

const Mapa = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{
    lat: 25.0391667,
    lng: 121.525
  }}>
    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
      {props
        .markers
        .map(marker => (<Marker
          position={{
          lat: marker.latitude,
          lng: marker.longitude
        }}
          key={marker.photo_id}/>))}
    </MarkerClusterer>
  </GoogleMap>
));

export default class Facultad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      facultadData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/facultad" +
        "es.json")
      .then(res => {
        const facultadData = res.data
        this.setState({facultadData});
      });
  }

  render() {
    let facultadData = this.state.facultadData
    let markers = []
    if (facultadData.length > 0) {

      markers = facultadData.reduce((prev, curr, i) => {
        if (i == 1) {
          let a = []
          a = a.concat(curr.restaurants)
          console.log("a", a)
          return a
        }

        let b = prev.concat(curr.restaurants)
        console.log(b)
        return b
      })
    }
    console.log("markers", markers)
    let container = <div style={{
      height: `100%`
    }}/>
    let mapElem = <div style={{
      height: `100%`
    }}/>
    if (facultadData) 
      return (
        <div>
          <Header page={this.props.location.pathname}/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <Mapa containerElement={container} mapElement={mapElem} markers={markers}/>
              </div>
            </div>
            {facultadData.map((facultad, index) => {
              let restaurants = facultad
                .restaurants
                .map((restaurant, index) => {
                  return (
                    <div className="col-sm-3">
                      <a href={`/facultades/${facultad.name}/${restaurant.name}`}>
                        <img src={restaurant.img} className="img-responsive" alt=""/>
                        <h4>{restaurant.name}</h4>
                        <p>{restaurant.status}</p>
                      </a>
                    </div>
                  )
                })
              return (
                <div className="row">
                  <div className="col-sm-12">
                    <h3>{facultad.name}</h3>
                    <p>{facultad.dscr}</p>
                    {restaurants}
                  </div>
                </div>
              )
            })}
          </div>
          <Footer/>
        </div>
      )

    return (
      <div>Cargando..</div>
    )
  }
}