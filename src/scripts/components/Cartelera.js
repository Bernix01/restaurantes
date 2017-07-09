import React from 'react'
import {Link} from 'react-router'

import Header from './Header'
import Footer from './Footer'

export default class Cartelera extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let data = {
      top: [
        {
          day: ""
        }
      ]
    }
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h1>Más votados</h1>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="top-menu">
                    <span className="likes pull-right">
                      <i className="fa fa-heart-o"></i><br/>61</span>
                    <h3 className="day">Martes 30</h3>
                    <h2 className="menu-name">Arroz con pollo</h2>
                    <h4 className="menu-place">FCSH</h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="top-menu">
                    <div className="top-menu">
                      <span className="likes pull-right">
                        <i className="fa fa-heart-o"></i><br/>61</span>
                      <h3 className="day">Martes 30</h3>
                      <h2 className="menu-name">Arroz con pollo</h2>
                      <h4 className="menu-place">FCSH</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h1>Esta semana</h1>
            </div>
            <div className="col-sm-12">
              <h2>Lunes</h2>
              <div className="row">
                <div className="col-sm-6">
                  <div className="menu">
                    <h4 className="menu-name">Arroz con pollo</h4>
                    <h6 className="menu-place">FCSH</h6>
                    <span className="likes pull-right">61<br/>
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <p className="menu-dscr">Well prepared food!</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="menu">
                    <h4 className="menu-name">Arroz con pollo</h4>
                    <h6 className="menu-place">FCSH</h6>
                    <span className="likes pull-right">61<br/>
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <p className="menu-dscr">Well prepared food!</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="menu">
                    <h4 className="menu-name">Arroz con pollo</h4>
                    <h6 className="menu-place">FCSH</h6>
                    <span className="likes pull-right">61<br/>
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <p className="menu-dscr">Well prepared food!</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="menu">
                    <h4 className="menu-name">Arroz con pollo</h4>
                    <h6 className="menu-place">FCSH</h6>
                    <span className="likes pull-right">61<br/>
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <p className="menu-dscr">Well prepared food!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}