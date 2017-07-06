import React from 'react'
import {connect} from "react-redux"

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
            <div className="col-md-3 infobox">
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
              </p>
            </div>
            <div className="col-md-3 infobox">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
              </p>
            </div>
            <div className="col-md-3 infobox">
              <i class="fa fa-search" aria-hidden="true"></i>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
              </p>
            </div>
            <div className="col-md-3 infobox">
              <i class="fa fa-map" aria-hidden="true"></i>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Consequatur, fuga nobis accusamus labore rem dignissimos repellendus debitis incidunt odio molestias omnis, 
                necessitatibus eveniet modi cupiditate amet, officia quis itaque similique. 
              </p>
            </div>
          </div>
          
        </section>
    )

  }
}

export default Info