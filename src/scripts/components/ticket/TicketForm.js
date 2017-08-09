import React from 'react'
import axios from 'axios'

import Header from '../Header'
import Footer from '../Footer'

export default class Ticket extends React.Component {
  constructor(props) {
    super(props)
  }

  crearTicket() {
    let ticket = {
      fechaEmision: document.getElementsByName("fechaEmision")[0].value,
      origen: document.getElementsByName("origen")[0].value,
      destino: document.getElementsByName("destino")[0].value,
      precio: Number.parseFloat(document.getElementsByName("precio")[0].value),
      adquirente: document.getElementsByName("adquirente")[0].value,
      puesto: Number.parseFloat(document.getElementsByName("puesto")[0].value)
    }
    axios
      .put("/api/tickets", ticket)
      .then(res => {
        location.replace("/tickets");
      })
      .catch(error => {
        alert(error.response.data);
      });
  }

  updateTicket() {
    let ticket = {
      fechaEmision: document.getElementsByName("fechaEmision")[0].value,
      origen: document.getElementsByName("origen")[0].value,
      destino: document.getElementsByName("destino")[0].value,
      precio: Number.parseFloat(document.getElementsByName("precio")[0].value),
      adquirente: document.getElementsByName("adquirente")[0].value,
      puesto: Number.parseFloat(document.getElementsByName("puesto")[0].value)
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
      // alert(this.props.fid);
      axios
        .get("/api/tickets/" + this.props.fid, ticket)
        .then(res => {
          let ticket = res.data;
          document.getElementsByName("origen")[0].value = ticket.origen;
          document.getElementsByName("destino")[0].value = ticket.destino;
          document.getElementsByName("precio")[0].value = ticket.precio;
          document.getElementsByName("adquirente")[0].value = ticket.adquirente;
          document.getElementsByName("puesto")[0].value = ticket.puesto;
          let fecha = new Date(ticket.fechaEmision)
          let month = fecha.getMonth();
          let day = fecha.getDay();
          document.getElementsByName("fechaEmision")[0].value = String(fecha.getFullYear()) + "-" + (month < 9
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
        action="/api/ticket"
        class="well form-horizontal"
        name="ticket"
        id="formulario-ticket"
        form>
        <div class="form-group">
          <label class="col-md-3 control-label">Fecha de Emisión</label>
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
                <i class="glyphicon glyphicon-info-sign"></i>
              </span>
              <select name="origen" class="form-control">
                <option disabled selected value>Seleccione origen</option>
                <option value="guayaquil">Guayaquil</option>
                <option value="quito">Quito</option>
                <option value="cuenca">Cuenca</option>
                <option value="portoviejo">Portoviejo</option>
                <option value="manta">Manta</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Destino</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-info-sign"></i>
              </span>
              <select name="destino" class="form-control">
                <option disabled selected value>Seleccione destino</option>
                <option value="guayaquil">Guayaquil</option>
                <option value="quito">Quito</option>
                <option value="cuenca">Cuenca</option>
                <option value="portoviejo">Portoviejo</option>
                <option value="manta">Manta</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Precio</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-usd"></i>
              </span>
              <input
                name="precio"
                placeholder="Precio"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Adquirente</label>
          <div class="col-md-9 inputGroupContainer"> 
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-pencil"></i>
              </span>
              <input
                name="adquirente"
                placeholder="Número de Cédula"
                class="form-control"
                type="text"
                required/>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Puesto</label>
          <div class="col-md-9 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="glyphicon glyphicon-usd"></i>
              </span>
              <input
                name="puesto"
                placeholder="Puesto"
                class="form-control"
                type="number"
                min="1"
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