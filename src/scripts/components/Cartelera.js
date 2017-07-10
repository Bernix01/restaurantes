import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

export default class Cartelera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masVotadosData : [],
      estaSemanaData: [],
      cargandoData : false,
      dataCargada : false
    };
  }

  componentDidMount() {
    this.state.cargandoData = true;
    axios.get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/cartelera.json")
      .then(res => {
        const masVotadosData = res.data["mas-votados"]
        const estaSemanaData = res.data["esta-semana"]
        if (res.data) {
          this.state.cargandoData = false;
          this.state.dataCargada = true;
          this.setState({ masVotadosData });
          this.setState({ estaSemanaData });
        }
        else {
          this.state.dataCargada = false;
        }
        
      });
  }

  render() {
    
    let masVotadosData = this.state.masVotadosData
    let estaSemanaData = this.state.estaSemanaData

    if(!this.state.dataCargada && !this.state.cargandoData)
      return (<div> No se encuentra el documento solicitado </div>)
    else if (this.state.dataCargada && !this.state.cargandoData) 

    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="main container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1>Más votados</h1>
            </div>
            <div className="col-sm-12">
              <div className="row"> 
                {masVotadosData.map((plato, index) => {
                
                    return (
                      <div className="col-sm-6 ">
                        <div className="top-menu">
                          <span className="likes pull-right">
                            <i className="fa fa-heart-o"></i><br/>{plato.likes}</span>
                          <h3 className="day">{plato.fecha}</h3>
                          <h2 className="menu-name">{plato["nombre-plato"]}</h2>
                          <h4 className="menu-place">{plato.restaurante}</h4>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1>Esta semana</h1>
            </div>
            
            {estaSemanaData.map((dia, index) => {
              let menuDia = dia.menu
                .map((plato, index) => {
                  return (
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div className="menu">
                        <h4 className="menu-name">{plato["nombre-plato"]}</h4>
                        <h6 className="menu-place">{plato.restaurante}</h6>
                        <span className="likes pull-right">{plato.likes}<br/>
                          <i className="fa fa-heart-o"></i>
                        </span>
                        <p className="menu-dscr">{plato.dscr}</p>
                      </div>
                    </div>
                  )
              })
              return (
                <div className="col-sm-12">
                  <h2>{dia.date}</h2>
                  <div className="row">
                    {menuDia}
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}