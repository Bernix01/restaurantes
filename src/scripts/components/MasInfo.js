import 'jquery'
import React from 'react'
import {connect} from "react-redux"
// import '../actions/gallery'

@connect((store) => {
  return {}
})
class MasInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <section className="info-row">
          
            <div className="container">
                <div className="info-texto">
                <h1>Acerca De</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perspiciatis dolores optio quisquam autem sed sequi reprehenderit officia laborum. 
                    Voluptas asperiores totam magni, hic eaque perferendis facilis labore quo repudiandae quod.
                </p>
                </div>
            </div>

            <div className="container">
                <a class="btn btn-primary" href="#">
                    ¡Hazlo ya!
                </a>
            </div>
          
        </section>
    )

  }
}

export default MasInfo