import React from 'react'
import {connect} from "react-redux"

@connect((store) => {
  return {}
})
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Restaurantes</a>
        </div>

        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li className={ this.props.page == '/facultades' ? 'active' : '' }>
              <a href="/facultades">Facultades</a>
            </li>
            <li className={ this.props.page == '/cartelera' ? 'active' : '' }>
              <a href="/cartelera">Cartelera</a>
            </li>
            <li className={ this.props.page == '/acerca-de' ? 'active' : '' }>
              <a href="/acerca-de">Acerca de</a>
            </li>
            <li className={ this.props.page == '/iniciar-sesion' ? 'active' : '' }>
              <a href="/iniciar-sesion">Iniciar sesión</a>
            </li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search"/>
            </div>
            <button type="submit" class="btn btn-default">Buscar</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header