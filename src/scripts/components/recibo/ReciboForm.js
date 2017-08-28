import React from 'react'
import axios from 'axios'

import Header from '../Header'
import Footer from '../Footer'

export default class Recibo extends React.Component {
  constructor(props) {
    super(props)
  }

  crearRecibo() {
    let recibo = {
      numRecibo: document.getElementsByName("numRecibo")[0].value,
      nombreRecibido: document.getElementsByName("nombreRecibido")[0].value,
      concepto: document.getElementsByName("concepto")[0].value,
      cantidad: Number.parseFloat(document.getElementsByName("cantidad")[0].value),
      fechaPago: document.getElementsByName("fechaPago")[0].value
    }
    axios
      .put("/api/recibos", recibo)
      .then(res => {
        location.replace("/recibos");
      })
      .catch(error => {
        alert(error.response.data);
      });
  }

  updateRecibo() {
    let recibo = {
      numRecibo: document.getElementsByName("numRecibo")[0].value,
      nombreRecibido: document.getElementsByName("nombreRecibido")[0].value,
      concepto: document.getElementsByName("concepto")[0].value,
      cantidad: Number.parseFloat(document.getElementsByName("cantidad")[0].value),
      fechaPago: document.getElementsByName("fechaPago")[0].value
    }
    axios
      .post("/api/recibos/" + this.props.fid, recibo)
      .then(res => {
        alert("Recibo actualizada");
        location.replace("/recibos");
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
        .get("/api/recibos/" + this.props.fid, recibo)
        .then(res => {
          let recibo = res.data;
          document.getElementsByName("numRecibo")[0].value = recibo.numRecibo;
          document.getElementsByName("nombreRecibido")[0].value = recibo.nombreRecibido;
          document.getElementsByName("cantidad")[0].value = recibo.cantidad;
          document.getElementsByName("concepto")[0].value = recibo.concepto;
          let fecha = new Date(recibo.fechaPago)
          let month = fecha.getMonth() + 1;
          let day = fecha.getDate() + 1;
          document.getElementsByName("fechaPago")[0].value = String(fecha.getFullYear()) + "-" + (month < 9
            ? '0'
            : '') + String(month) + "-" + (day < 9
            ? '0'
            : '') + String(day);
        })
        .catch(error => {
          alert(error);
          location.replace("/recibos");
        });
    }
  }

  render() {
    return (
      <form
        action="/api/recibo"
        class="well form-horizontal"
        name="recibo"
        id="formulario-recibo"
        form>
        <div class="form-group">
          <label class="col-md-3 control-label">Número de Recibo</label>
          <div class="col-md-9 inputGroupContainer"> 
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-pencil"></i>
              </span>
              <input
                name="numRecibo"
                placeholder="Número de Recibo"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Recibido por</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="nombreRecibido"
                placeholder="nombre"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Concepto</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="concepto"
                placeholder="concepto"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Fecha de Pago</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-calendar"></i>
              </span>
              <input
                name="fechaPago"
                placeholder="Fecha de Pago"
                class="form-control"
                type="date"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Cantidad</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-usd"></i>
              </span>
              <input
                name="cantidad"
                placeholder="Cantidad"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                required/>
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