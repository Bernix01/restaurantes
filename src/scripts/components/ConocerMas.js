import React from 'react'
import {connect} from "react-redux"

// @connect((store) => {
//   return {}
// })
class ConocerMas extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <section className="row info-row">
            
            <div className="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2 info-texto">
                <h1>Conoce más de ellos</h1>
                <p>
                    Informáte más acerca de cada uno de los restaurantes que se encuentran en la universidad.
                </p>
                <div class="boton">
                    <a class="btn btn-primary" href="/facultades">
                        ¡Hazlo ya!
                    </a>
                </div>
            </div>
          
        </section>
    )

  }
}

export default ConocerMas