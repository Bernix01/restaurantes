import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

export default class Facturas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      facturaData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/facturas" +
        ".json")
      .then(res => {
        const facturaData = res.data["facturas"]
        this.setState({facturaData});
      });
  }

  render() {

    let facturaData = this.state.facturaData

    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="main container-fluid">    
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <div class="card-header">
                        <h1>Facturas</h1>
                        <a href="/factura" class="btn btn-success btn-block" target="_blank"><i class="fa fa-th-list"></i> Crear Factura</a>
                      </div>
                      <div class="card-content table-responsive">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Empresa</th>
                              <th>Fecha Límite</th>
                              <th>Total</th>
                              <th>Estado</th>
                              <th>Opciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {facturaData.map((factura, index) => {              
                              return (
                                <tr>
                                  <td>{factura.empresa}</td>
                                  <td>{factura.fecha}</td>
                                  <td>{factura.total}</td>
                                  <td>{factura.estado}</td>
                                  <td class="td-action">
                                    <a href={`/factura/${encodeURIComponent(factura.id)}`} rel="tooltip" title="Editar" class="btn btn-simple btn-warning btn-xs" data-original-title="Editar">
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" rel="tooltip" title="Eliminar" class="btn-simple btn btn-danger btn-xs" data-original-title="Eliminar">
                                      <i class="fa fa-remove"></i>
                                    </a>
                                  </td>
                                </tr>
                              )
                            })
                          }
                          </tbody>
                        </table>
                      </div>
                    </div>    
                </div>
            </div>
        <Footer/>
      </div>
    )
  }
}