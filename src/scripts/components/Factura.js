import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Factura extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <div>
      //   <Header page={this.props.location.pathname}/>
      //   <div class="main container-fluid">    
      //       <div class="row">
      //         <div class="col-md-6 col-md-offset-3">
      <form action = "/api/facturas" class="well form-horizontal" id="formulario-factura" method="post">
      
        <div class="form-group">
          <label class="col-md-3 control-label">Cliente</label>  
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input name="cliente" placeholder="Cliente" class="form-control"  type="text" required/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">Fecha Máxima de Pago</label> 
            <div class="col-md-9 inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                <input name="date" placeholder="Fecha Máxima de Pago" class="form-control"  type="date" required/>
              </div>
            </div>
        </div>
      
      
        <div class="form-group">
          <label class="col-md-3 control-label">Total a Pagar</label>  
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                <input name="costo" placeholder="Total a Pagar" class="form-control"  type="number" min="0" step="0.01" required/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">Mensaje</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-info-sign"></i></span>
                <select name="estado" class="form-control">
                    <option disabled selected value>Seleccione un estado</option>
                    <option value="pagado">Pagado</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="acumulado">Acumulado</option>
                </select>
            </div>
          </div>
        </div>
  
        <div class="form-group">
          {/*<label class="col-md-4 control-label"></label>*/}
          <div class="col-md-8 col-md-offset-2">
            {/*<div class="input-group">*/}
              <button type="submit form-control" class="btn btn-success" >Guardar <span class="glyphicon glyphicon-save"></span></button>
            {/*</div>*/}
          </div>
        </div>

      </form>
            
    )
  }
}