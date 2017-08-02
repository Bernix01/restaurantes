import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Recibo from './ReciboForm'

export default class CrearRecibo extends React.Component {
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
              <h1>Crear Recibo</h1>
              <Recibo/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
  }
}