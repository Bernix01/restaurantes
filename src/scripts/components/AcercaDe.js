import React from 'react'

import Header from './Header'
import Footer from './Footer'

// import '../actions/form-contacto.js'

// import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js'

export default class AcercaDe extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="container-fluid">
          <div class="row">
            <div class="col-md-4">

              <h2> Acerca De </h2>
              <p> Este sitio web permite a los usuarios conocer  los menús semanales que ofrece cada restaurante, así como
                los platillos más votados por las personas y el restaurante en el cual se venden.</p>
              <p> Si desea más información, puede ponerse en contacto con nosotros llenando el formulario que se encuentra a continuación. </p>
              <h2> Autores </h2>
              <p> Este sitio web fue realizado por </p>
              <p> Guillermo Bernal </p>
              <p> José Massón </p>

            </div>
            <div class = "col-md-8">
            {/*<div class="col-xl-4 col-xl-offset-4 col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">*/}
              <form action = "" class="well form-horizontal" id="formulario-contacto" method="post">
                
                <div class="form-group">
                  <label class="col-md-3 control-label">Nombres</label>  
                  <div class="col-md-9 inputGroupContainer">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                      <input name="nombres" placeholder="Nombres" class="form-control"  type="text" required/>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Apellidos</label> 
                    <div class="col-md-9 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input name="apellidos" placeholder="Apellidos" class="form-control"  type="text" required/>
                      </div>
                    </div>
                </div>
              
                <div class="form-group">
                  <label class="col-md-3 control-label">E-Mail</label>  
                  <div class="col-md-9 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                        <input name="email" placeholder="Correo electrónico" class="form-control"  type="email" required/>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">Mensaje</label>
                  <div class="col-md-9 inputGroupContainer">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                        <textarea class="form-control" name="mensaje" placeholder="Mensaje" required></textarea>
                    </div>
                  </div>
                </div>

                {/*<div class="alert alert-success" role="alert" id="success_message">Envio exitoso <i class="glyphicon glyphicon-thumbs-up"></i> Gracias por contactarse con nosotros.</div>*/}

                <div class="form-group">
                  <label class="col-md-4 control-label"></label>
                  <div class="col-md-8">
                    <button type="submit" class="btn btn-success" >Enviar <span class="glyphicon glyphicon-send"></span></button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}