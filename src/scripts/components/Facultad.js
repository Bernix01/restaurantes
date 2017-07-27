import React from 'react'
import {Link} from 'react-router'
import axios from 'axios';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer'

import Header from './Header'
import Footer from './Footer'

const Mapa = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{
    lat: -2.1481458,
    lng: -79.9644885
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
    this.like = this.like.bind(this);
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

  like(restaurant){
	
  axios.post("/like",{params:{restaurant:restaurant}})
        .then(res => {
          const facultadData = this.state.facultadData.map((facultad) =>{
            facultad.restaurants.map((restaurant)=>{
                if(restaurant.deepEqual(res.data)){
                  return Object.assing(restaurant,res.data)
                }
            })
          })
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
          return a
        }
        let b = prev.concat(curr.restaurants)
        return b
      })
    }
    let container = <div style={{
      height: `700px`
    }}/>
    let mapElem = <div style={{
      height: `600px`
    }}/>
    if (facultadData) 
      return (
        <div>
          <Header page={this.props.location.pathname}/>
          <div className="main container-fluid">
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
                      
                        <span className="likes pull-right" onClick={() => this.like(restaurant)}>
                            <i className="fa fa-heart-o"></i><br/>{restaurant.likes}
                        </span>
                        <img src={restaurant.img} className="img-responsive" alt={restaurant.name}/>
                        <a href={`/facultades/${encodeURIComponent(facultad.name)}/${encodeURIComponent(restaurant.name)}`}>
                        <h4>{restaurant.name}</h4>
                      </a>
                        <p>{restaurant.status}</p>
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
