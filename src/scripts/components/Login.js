import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class Facultad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let facultadData = [
    //   {
    //     name: "FCNM",
    //     dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //         "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //         " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //         "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //         "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //         "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //         "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //         "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //         "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //         "it sed diam.",
    //     restaurants: [
    //       {
    //         name: "CELEX",
    //         status: "Open",
    //         img: "http://via.placeholder.com/300x300",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "COCA COLA",
    //         status: "Open",
    //         img: "http://via.placeholder.com/300x300",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "CELEX",
    //         status: "Open",
    //         img: "http://via.placeholder.com/300x300",
    //         likes: 22,
    //         liked: true
    //       }
    //     ]
    //   }, {
    //     name: "FCNM",
    //     dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //         "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //         " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //         "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //         "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //         "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //         "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //         "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //         "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //         "it sed diam.",
    //     restaurants: [
    //       {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }, {
    //         name: "COCA COla",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }, {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }
    //     ]
    //   }, {
    //     name: "FCNM",
    //     dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //         "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //         " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //         "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //         "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //         "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //         "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //         "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //         "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //         "it sed diam.",
    //     restaurants: [
    //       {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }, {
    //         name: "COCA COla",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }, {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         img: "http://via.placeholder.com/300x300",
    //         liked: true
    //       }
    //     ]
    //   }, {
    //     name: "FCNM",
    //     dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //         "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //         " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //         "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //         "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //         "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //         "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //         "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //         "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //         "it sed diam.",
    //     restaurants: [
    //       {
    //         name: "CELEX",
    //         status: "Open",
    //         img: "http://via.placeholder.com/300x300",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "COCA COla",
    //         img: "http://via.placeholder.com/300x300",
    //         status: "Open",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "CELEX",
    //         img: "http://via.placeholder.com/300x300",
    //         status: "Open",
    //         likes: 22,
    //         liked: true
    //       }
    //     ]
    //   }, {
    //     name: "FCNM",
    //     dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //         "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //         " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //         "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //         "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //         "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //         "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //         "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //         "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //         "it sed diam.",
    //     restaurants: [
    //       {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "COCA COla",
    //         status: "Open",
    //         likes: 22,
    //         liked: true
    //       }, {
    //         name: "CELEX",
    //         status: "Open",
    //         likes: 22,
    //         liked: true
    //       }
    //     ]
    //   }
    // ]
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div class="container">
            <div class="row">
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

                            
                            {/*<input type="checkbox" checked="checked"/> Recordarme*/}
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        {/*<div className="container-fluid">
          {facultadData.map((facultad, index) => {
            let restaurants = facultad
              .restaurants
              .map((restaurant, index) => {
                return (
                  <div className="col-sm-3">
                    <img src={restaurant.img} alt=""/>
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.status}</p>
                  </div>
                )
              })
            return (
              <div className="row">
                <div className="col-sm-12">
                  <h3>{facultad.name}</h3>
                  <p>{facultad.dscr}</p>
                  {restaurants}
                </div>
              </div>
            )
          })}
        </div>}*/}
        <Footer/>
      </div>
    )
  }
}