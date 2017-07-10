import 'jquery'
import React from 'react'
import {connect} from "react-redux"
// import '../actions/gallery'

@connect((store) => {
  return {}
})
class Info extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <section className="row info-row">

          <div className="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
            <h1 class="info-texto">Encuéntralo en un solo clic</h1>
            <p class="info-texto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis dolores optio quisquam autem sed sequi reprehenderit officia laborum. 
              Voluptas asperiores totam magni, hic eaque perferendis facilis labore quo repudiandae quod.
            </p>
          </div>

          <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            
            <div className="col-md-3 col-sm-6 infobox">
              <div className="icono">
                <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i>
              </div>
              <div className="info-texto">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>  
            </div>
            
            <div className="col-md-3 col-sm-6 infobox">
              <div className="icono">
                <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </div>
              <div className="info-texto">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 infobox">
              <div className="icono">
                <i class="fa fa-search fa-2x" aria-hidden="true"></i>
              </div>
              <div className="info-texto">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 infobox">
              <div className="icono">
                <i class="fa fa-map fa-2x" aria-hidden="true"></i>
              </div>
              <div className="info-texto">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>
          
          </div>
        
        </section>
    )

  }
}

export default Info