import React from 'react'
import Header from './Header'
import TimelineSemana from './TimelineSemana'
import Footer from './Footer'
import axios from 'axios'

export default class Restaurante extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantData: [],
      cargandoData : false,
      dataCargada : false
    };
  }

  componentDidMount() {
    this.state.cargandoData = true;
    axios.get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/restaurantes.json")
      .then(res => {
        const restaurantData = res.data
        console.log(restaurantData.length)
        if (restaurantData.length > 0) {
          this.state.cargandoData = false;
          this.state.dataCargada = true;
          this.setState({ restaurantData });
        }
        else {
          this.state.dataCargada = false;
        }
        
      });
  }

  render() {
    let {facultad, restaurant} = this.props.match.params
    let restaurantData = this.state.restaurantData.filter(el =>
      el.facultad === facultad && el.name === restaurant
    )[0]
    if(!this.state.dataCargada && !this.state.cargandoData)
      return (<div> No se encuentra el documento solicitado </div>)
    else if (this.state.dataCargada && !this.state.cargandoData) 
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
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}