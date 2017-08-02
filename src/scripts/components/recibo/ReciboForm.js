import React from 'react'
import axios from 'axios'

import Header from '../Header'
import Footer from '../Footer'

export default class Recibo extends React.Component {
  constructor(props) {
    super(props)
  }

  crearRecibo() {
    let factura = {
      numfactura: document.getElementsByName("numfactura")[0].value,
      cliente: document.getElementsByName("cliente")[0].value,
      costo: document.getElementsByName("costo")[0].value,
      estado: document.getElementsByName("estado")[0].value,
      date: document.getElementsByName("date")[0].value
    }
    axios
      .put("/api/facturas", factura)
      .then(res => {
        location.replace("/facturas");
      })
      .catch(error => {
        alert(error.response.data);
      });
  }

  updateRecibo() {
    let factura = {
      numfactura: document.getElementsByName("numfactura")[0].value,
      cliente: document.getElementsByName("cliente")[0].value,
      costo: document.getElementsByName("costo")[0].value,
      estado: document.getElementsByName("estado")[0].value,
      date: document.getElementsByName("date")[0].value
    }
    axios
      .post("/api/facturas/" + this.props.fid, factura)
      .then(res => {
        alert("Recibo actualizada");
        location.replace("/facturas");
      })
      .catch(error => {
        alert(error.response.data);
      });
  }

  handleSubmit() {
    if (this.props.update) 
      return this.updateRecibo();
    return this.crearRecibo();
  }

  componentDidMount() {
    if (this.props.update) {
      axios
        .get("/api/facturas/" + this.props.fid, factura)
        .then(res => {
          let factura = res.data;
          document.getElementsByName("numfactura")[0].value = factura.numRecibo;
          document.getElementsByName("cliente")[0].value = factura.nombreEmpresa;
          document.getElementsByName("costo")[0].value = factura.cantidad;
          document.getElementsByName("estado")[0].value = factura.estado;
          let fecha = new Date(factura.fechaPago)
          let month = fecha.getMonth();
          let day = fecha.getDay();
          document.getElementsByName("date")[0].value = String(fecha.getFullYear()) + "-" + (month < 9
            ? '0'
            : '') + String(month) + "-" + (day < 9
            ? '0'
            : '') + String(day);
        })
        .catch(error => {
          alert("la factura no existe");
          location.replace("/facturas");
        });
    }
  }

  render() {
    return (
      <form
        action="/api/facturas"
        class="well form-horizontal"
        name="factura"
        id="formulario-factura"
        form>
        <div class="form-group">
          <label class="col-md-3 control-label">Número de Recibo</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-pencil"></i>
              </span>
              <input
                name="numfactura"
                placeholder="Número de Recibo"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Cliente</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="cliente"
                placeholder="Cliente"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Fecha Máxima de Pago</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-calendar"></i>
              </span>
              <input
                name="date"
                placeholder="Fecha Máxima de Pago"
                class="form-control"
                type="date"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Total a Pagar</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-usd"></i>
              </span>
              <input
                name="costo"
                placeholder="Total a Pagar"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Mensaje</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-info-sign"></i>
              </span>
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
          <div class="col-md-8 col-md-offset-2">
            <div class="btn btn-success" onClick= { () => this.handleSubmit() }>
              Guardar
              <span class="glyphicon glyphicon-save"></span>
            </div>
          </div>
        </div>

      </form>
    )
  }
}