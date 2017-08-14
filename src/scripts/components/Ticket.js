import React from 'react'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

export default class Ticket extends React.Component {
  constructor(props) {
    super(props)
  }

  crearTicket() {
    let ticket = {
      fechaemision: document.getElementsByName("fechaemision")[0].value,
      origen: document.getElementsByName("origen")[0].value,
      destino: document.getElementsByName("destino")[0].value,
      precio: document.getElementsByName("precio")[0].value,
      adquiriente: document.getElementsByName("adquiriente")[0].value,
      puesto: document.getElementsByName("puesto")[0].value
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

  updateTicket() {
    let factura = {
      fechaemision: document.getElementsByName("fechaemision")[0].value,
      origen: document.getElementsByName("origen")[0].value,
      destino: document.getElementsByName("destino")[0].value,
      precio: document.getElementsByName("precio")[0].value,
      adquiriente: document.getElementsByName("adquiriente")[0].value,
      puesto: document.getElementsByName("puesto")[0].value
    }
    axios
      .post("/api/tickets/" + this.props.fid, ticket)
      .then(res => {
        alert("Ticket actualizado");
        location.replace("/tickets");
      })
      .catch(error => {
        alert(error.response.data);
      });
  }

  handleSubmit() {
    if (this.props.update) 
      return this.updateTicket();
    return this.crearTicket();
  }

  componentDidMount() {
    if (this.props.update) {
      axios
        .get("/api/tickets/" + this.props.fid, factura)
        .then(res => {
          let ticket = res.data;
          fechaemision: document.getElementsByName("fechaemision")[0].value = ticket.fechaEmision;
          document.getElementsByName("origen")[0].value = ticket.origen;
          document.getElementsByName("destino")[0].value = ticket.destino;
          document.getElementsByName("precio")[0].value = ticket.precio;
          document.getElementsByName("adquiriente")[0].value = ticket.adquiriente;
          document.getElementsByName("puesto")[0].value = ticket.puesto;
          let fecha = new Date(ticket.fechaEmision)
          let month = fecha.getMonth();
          let day = fecha.getDay();
          document.getElementsByName("date")[0].value = String(fecha.getFullYear()) + "-" + (month < 9
            ? '0'
            : '') + String(month) + "-" + (day < 9
            ? '0'
            : '') + String(day);
        })
        .catch(error => {
          alert("el ticket no existe");
          location.replace("/tickets");
        });
    }
  }

  render() {
    return (
      <form
        action="/api/tickets"
        class="well form-horizontal"
        name="ticket"
        id="formulario-ticket"
        form>
        <div class="form-group">
          <label class="col-md-3 control-label">Control Tickets</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-calendar"></i>
              </span>
              <input
                name="fechaEmision"
                placeholder="Fecha de Emision"
                class="form-control"
                type="date"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Origen</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="origen"
                placeholder="Origen"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Destino</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="destino"
                placeholder="Destino"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label">Total a Pagar</label>
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
          <label class="col-md-3 control-label">Usuario</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-user"></i>
              </span>
              <input
                name="adquiriente"
                placeholder="Adquiriente"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-2 control-label">Puesto</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-briefcase"></i>
              </span>
              <input
                name="adquiriente"
                placeholder="Adquiriente"
                class="form-control"
                type="number"
                min="0"
                step="1"
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