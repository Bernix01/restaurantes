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
          
            <div className="container">
                <div className="info-texto">
                <h1>Conoce más de ellos</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dolores optio quisquam autem sed sequi reprehenderit officia laborum. 
                    Voluptas asperiores totam magni, hic eaque perferendis facilis labore quo repudiandae quod.
                </p>
                </div>
            </div>

            <div className="container">
                <a class="btn btn-primary" href="/facultades">
                    ¡Hazlo ya!
                </a>
            </div>
          
        </section>
    )

  }
}

export default ConocerMas