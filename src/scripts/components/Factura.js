import React from 'react'
import axios from 'axios'


import Header from './Header'
import Footer from './Footer'

export default class Factura extends React.Component {
  constructor(props) {
    super(props)
  }

  crearFactura(){
    console.log("asdoi")
    console.log("numfactura", document.factura.numfactura)
    let factura = {
      numfactura: document.getElementsByName("numfactura")[0].value,
      cliente: document.getElementsByName("cliente")[0].value,
      costo: document.getElementsByName("costo")[0].value,
      estado: document.getElementsByName("estado")[0].value,
      date: document.getElementsByName("date")[0].value,
    }
    axios.put("/api/facturas", factura)
        .then(res => {
          alert(res);
        })
        .catch(error => {
          alert(error);
        });
  }

  render() {
    return (
      // <div>
      //   <Header page={this.props.location.pathname}/>
      //   <div class="main container-fluid">    
      //       <div class="row">
      //         <div class="col-md-6 col-md-offset-3">
      <form action = "/api/facturas" class="well form-horizontal" name="factura" id="formulario-factura">
      
        <div class="form-group">
          <label class="col-md-3 control-label">Número de Factura</label>  
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
              <input name="numfactura" placeholder="Número de Factura" class="form-control"  value="1234567890123456" type="text" required/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">Cliente</label>  
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input name="cliente" placeholder="Cliente" value="Guillermo" class="form-control"  type="text" required/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">Fecha Máxima de Pago</label> 
            <div class="col-md-9 inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                <input name="date" placeholder="Fecha Máxima de Pago" value="2014-12-12" class="form-control"  type="date" required/>
              </div>
            </div>
        </div>
      
      
        <div class="form-group">
          <label class="col-md-3 control-label">Total a Pagar</label>  
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-usd"></i></span>
                <input name="costo" placeholder="Total a Pagar" value="12" class="form-control"  type="number" min="0" step="0.01" required/>
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
                    <option value="pagado" selected>Pagado</option>
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
              <div class="btn btn-success" onClick={()=> this.crearFactura()} >Guardar <span class="glyphicon glyphicon-save"></span></div>
            {/*</div>*/}
          </div>
        </div>

      </form>
            
    )
  }
}