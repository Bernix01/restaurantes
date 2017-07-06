import React from 'react'
import {connect} from "react-redux"



@connect((store) => {
  return {}
})
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
	      <div className="container">
                {/*<div className="col-md-6 info-autor">
                    <p>Elaborado por:</p>
                    <ul>
                      <li>Guillermo Bernal</li>
                      <li>José Luis Massón</li>
                    </ul>
                </div>*/}
                <div className="col-md-12 derechos-reservados">
                    <p>Todos los derechos reservados</p>
                </div>
            </div>
      </footer>
    )
  }
}
