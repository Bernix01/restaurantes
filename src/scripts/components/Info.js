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
        <section className="info">
          
          <div className="container">
            <div className="info-texto">
              <h1>Encuéntralo en un solo clic</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis dolores optio quisquam autem sed sequi reprehenderit officia laborum. 
                Voluptas asperiores totam magni, hic eaque perferendis facilis labore quo repudiandae quod.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="col-md-3 infobox">
              <div className="icono">
                <i class="fa fa-clock-o fa-2x" aria-hidden="true"></i>
              </div>
              <div className="texto-icono">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>  
            </div>
            
            <div className="col-md-3 infobox">
              <div className="icono">
                <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              </div>
              <div className="texto-icono">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>

            <div className="col-md-3 infobox">
              <div className="icono">
                <i class="fa fa-search fa-2x" aria-hidden="true"></i>
              </div>
              <div className="texto-icono">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>

            <div className="col-md-3 infobox">
              <div className="icono">
                <i class="fa fa-map fa-2x" aria-hidden="true"></i>
              </div>
              <div className="texto-icono">
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
                </p>
              </div>
            </div>

          </div>
          {/*<div id="gallery'>
            <a href="http://www.somedomain.com/images/image1_large.jpg">
              <img src="http://www.somedomain.com/images/image1_small.jpg" title="photo1 title">
            </a>
          </div>*/}
        
        </section>
    )

  }
}

export default Info