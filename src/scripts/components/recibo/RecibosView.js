import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from '../Header'
import Footer from '../Footer'

export default class Recibos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reciboData: []
    };
  }

  eliminarRecibo(id) {
    let confirmacion = confirm("¿Está seguro que desea eliminar esta recibo?");

    if (confirmacion) {
      axios.delete("/api/recibos", {params:{id:id}})
        .then(res => {
          location.replace("/recibos")
        })
        .catch(error => {
          alert("un error ha sucedido :(")
        });
      window.location.reload();
      
    }
  }

  componentDidMount() {
    axios.get("/api/recibos")
      .then(res => {
        // alert(res.status + res.data);
        // alert(res.data);
        const reciboData = res.data;
        // console.log(reciboData);
        this.setState({reciboData});
    });
  }

  render() {

    let reciboData = this.state.reciboData
    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="main container-fluid">    
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <div class="card-header">
                        <h1>Recibos</h1>
                        <a href="/recibo" class="btn btn-success btn-block"><i class="fa fa-th-list"></i>Crear Recibo</a>
                      </div>
                      <div class="card-content table-responsive">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>No. Recibo</th>
                              <th>Recibido por</th>
                              <th>Fecha Pago</th>
                              <th>Concepto</th>
                              <th>Cantidad</th>
                              <th>Opciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reciboData.map((recibo, index) => {              
                              return (
                                <tr>
                                  <td>{recibo.numRecibo}</td>
                                  <td>{recibo.nombreRecibido}</td>
                                  <td>{recibo.fechaPago}</td>
                                  <td>{recibo.concepto}</td>
                                  <td>{recibo.cantidad}</td>
                                  <td class="td-action">
                                    <a href={`/recibo/${encodeURIComponent(recibo._id)}`} rel="tooltip" title="Editar" class="btn btn-simple btn-warning btn-xs" data-original-title="Editar">
                                      <i class="fa fa-pencil"></i>
                                    </a>
                                    <a rel="tooltip" title="Eliminar" class="btn-simple btn btn-danger btn-xs" data-original-title="Eliminar" onClick={() => this.eliminarRecibo(recibo._id)}>
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