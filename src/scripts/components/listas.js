import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

export default class Lista extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaData: []
    };
  }
  componentDidMount() {
    axios.get("/api/lista")
      .then(res => {
        // alert(res.status + res.data);
        // alert(res.data);
        const listaData = res.data;
        // console.log(listaData);
        this.setState({listaData});
    });
  }

  render() {

    let listaData = this.state.listaData
    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="main container-fluid">    
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                      <div class="card-content table-responsive">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Fecha</th>
                              <th>Temperatura</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listaData.map((lista, index) => {              
                              return (
                                <tr>
                                  <td>{lista.fecha}</td>
                                  <td>{lista.temperatura}</td>
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