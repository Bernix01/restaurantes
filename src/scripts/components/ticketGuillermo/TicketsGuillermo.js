import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from '../Header'
import Footer from '../Footer'

export default class Tickets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ticketData: []
    };
  }

  eliminarTicket(id) {
    let confirmacion = confirm("¿Está seguro que desea eliminar este ticket?");

    if (confirmacion) {
      axios.delete("/api/tickets", {params:{id:id}})
        .then(res => {
          location.replace("/tickets")
        })
        .catch(error => {
          alert("un error ha sucedido :(")
        });
      window.location.reload();
      
    }
  }

  componentDidMount() {
    axios.get("/api/tickets")
      .then(res => {
        // alert(res.status + res.data);
        // alert(res.data);
        const ticketData = res.data;
        // console.log(ticketData);
        this.setState({ticketData});
    });
  }

  render() {

    let ticketData = this.state.ticketData
    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="main container-fluid">    
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <div class="card-header">
                        <h1>Tickets</h1>
                        <a href="/ticket" class="btn btn-success btn-block"><i class="fa fa-th-list"></i> Crear Ticket</a>
                      </div>
                      <div class="card-content table-responsive">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>origen</th>
                              <th>fecha</th>
                              <th>destino </th>
                              <th>adquiriente</th>
                              <th>puesto</th>
                              <th>precio</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ticketData.map((ticket, index) => {              
                              return (
                                <tr>
                                  <td>{ticket.origen}</td>
                                  <td>{ticket.fechaPago}</td>
                                  <td>{ticket.destino}</td>
                                  <td>{ticket.adquiriente}</td>
                                  <td>{ticket.puesto}</td>
                                  <td>{ticket.precio}</td>
                                  <td class="tpreciod-action">
                                    <a href={`/tickets/${encodeURIComponent(ticket._id)}`} rel="tooltip" title="Editar" class="btn btn-simple btn-warning btn-xs" data-original-title="Editar">
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <a rel="tooltip" title="Eliminar" class="btn-simple btn btn-danger btn-xs" data-original-title="Eliminar" onClick={() => this.eliminarTicket(ticket._id)}>
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