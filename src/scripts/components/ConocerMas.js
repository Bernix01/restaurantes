import React from 'react'
import {connect} from "react-redux"

@connect((store) => {
  return {}
})
class ConocerMas extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <section className="row info-row">
            
            <div className="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
                <h1 class="info-texto">Conoce más de ellos</h1>
                <p class = "info-texto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dolores optio quisquam autem sed sequi reprehenderit officia laborum. 
                    Voluptas asperiores totam magni, hic eaque perferendis facilis labore quo repudiandae quod.
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