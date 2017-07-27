import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

export default class Facturas extends React.Component {
  constructor(props) {
    super(props)
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
    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="main container-fluid">    
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered table-hover">
                          <thead>
                          <tr>
                            <th>Empresa</th>
                            <th>Fecha Límite</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                          </tr></thead>
                        </table>
                    </div>    
                </div>
            </div>
        <Footer/>
      </div>
    )
  }
}