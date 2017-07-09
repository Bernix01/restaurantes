import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header page={this.props.location.pathname}/>
            <div class="row">
                <div class="container">
                    <div class="Absolute-Center is-Responsive">
                        <div class="col-xl-4 col-xl-offset-4 col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
                            <form action="" className="formulario">

                                <div id="logo-container"></div>
                                {/*<img src={"http://via.placeholder.com/300x300"} alt="Avatar" class="avatar"/>*/}

                                <div class="form-group input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input class="form-control" type="text" name='username' placeholder="Usuario" required/>
                                </div>
                                <div class="form-group input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input class="form-control" type="password" placeholder="Contraseña" name="password" required/>
                                </div>

                                <div class="checkbox">
                                    <label>
                                    <input type="checkbox"/> Recordarme
                                    </label>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-success btn-block">Login</button>
                                </div>
                                <div class="form-group text-center">
                                    <a href="#">¿Ha olvidado su contraseña?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
        <Footer/>
      </div>
    )
  }
}