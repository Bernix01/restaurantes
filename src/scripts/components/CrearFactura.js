import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Factura from './Factura'

export default class CrearFactura extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div>
        <Header page={this.props.location.pathname}/>
        <div class="main container-fluid">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <h1>Crear Factura</h1>
              <Factura/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
  }
}