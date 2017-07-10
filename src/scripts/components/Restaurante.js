import React from 'react'
import Header from './Header'
import TimelineSemana from './TimelineSemana'
import Footer from './Footer'
import axios from 'axios'

import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

const Mapa = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{
    lat: -2.1481458,
    lng: -79.9644885
  }}>

    {props
      .markers
      .map(marker => (<Marker
        position={{
        lat: marker.latitude,
        lng: marker.longitude
      }}
        key={marker.photo_id}/>))}
  </GoogleMap>
));

export default class Restaurante extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantData: [],
      cargandoData: false,
      dataCargada: false
    };
  }

  componentDidMount() {
    this.state.cargandoData = true;
    axios
      .get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/restaura" +
        "ntes.json")
      .then(res => {
        const restaurantData = res.data
        console.log(restaurantData.length)
        if (restaurantData.length > 0) {
          this.state.cargandoData = false;
          this.state.dataCargada = true;
          this.setState({restaurantData});
        } else {
          this.state.dataCargada = false;
        }

      });
  }

  render() {

    let {facultad, restaurant} = this.props.match.params

    let container = <div style={{
      height: `300px`
    }}/>
    let mapElem = <div style={{
      height: `300px`
    }}/>
    let restaurantData = this
      .state
      .restaurantData
      .filter(el => el.facultad === facultad && el.name === restaurant)[0]
    if (!this.state.dataCargada && !this.state.cargandoData) 
      return (
        <div>
          No se encuentra el documento solicitado
        </div>
      )
    else if (this.state.dataCargada && !this.state.cargandoData) {
      console.log(restaurant)
      console.log(facultad)
      return (
        <div>
          <Header page={this.props.location.pathname}/>
          <div className="container-fluid">
            <div class="jumbotron">
              <div class="container">
                <h1>{restaurantData.name}</h1>
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${restaurantData.lat},${restaurantData.lng}&zoom=17&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:${restaurantData.name}%7C${restaurantData.lat},${restaurantData.lng}&key=AIzaSyBwqTWpZhU7AGPygyv7KYWQUdFSG2ALgGI`}
                  className="res-map"
                  alt=""/>
                <p>{restaurantData.facultad}</p>
                <p>
                  <a class="btn btn-primary btn-lg">{restaurantData.status}</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7 col-sm-offset-1">
                <TimelineSemana semana={restaurantData.week}/>
              </div>
              <div className="col-sm-4">
                <h2>Acerca de</h2>
                <p>{restaurantData.dscr}</p>
                <Mapa containerElement={container} mapElement={mapElem} markers={[restaurantData]}/>

              </div>
            </div>
            <Footer/>
          </div>
        </div>
      )
    }
  }
}