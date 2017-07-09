import React from 'react'
import Header from './Header'
import TimelineSemana from './TimelineSemana'
import Footer from './Footer'
import axios from 'axios';

export default class Restaurante extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantData: []
    };
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/Bernix01/restaurantes/master/src/data/restaurantes.json")
      .then(res => {
        console.log(data);
        const restaurantData = res.data
        this.setState({ restaurantData });
      });
  }

  render() {
    let {facultad, restaurant} = this.props.match.params
    // let restaurantData = {
    //   name: restaurant,
    //   img: "http://via.placeholder.com/1850x950",
    //   status: "Open",
    //   lat:"-2.1468555",
    //   lng:"-79.9653056",
    //   facultad: facultad,
    //   dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
    //       "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
    //       " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
    //       "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
    //       "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
    //       "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
    //       "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
    //       "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
    //       "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
    //       "it sed diam.",
    //   week: {
    //     days: [
    //       {
    //         date: "Lunes",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }, {
    //         date: "Martes",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }, {
    //         date: "Miercoles",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }, {
    //         date: "Jueves",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }, {
    //         date: "Viernes",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }, {
    //         date: "Sabado",
    //         menus: [
    //           {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }, {
    //             img: "http://via.placeholder.com/200x130",
    //             dscr: "Well prepared food!"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // }
    console.log(restaurant)
    return (
      <div>
        <Header page={this.props.location.pathname}/>
        <div className="container-fluid">
          <div class="jumbotron">
            <div class="container">
              <h1>{restaurantData.name}</h1>
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${restaurantData.lat},${restaurantData.lng}&zoom=17&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:${restaurantData.name}%7C${restaurantData.lat},${restaurantData.lng}&key=AIzaSyBwqTWpZhU7AGPygyv7KYWQUdFSG2ALgGI`}
                className="res-map"
                alt=""/>
              <p>{restaurantData.facultad}</p>
              <p>
                <a class="btn btn-primary btn-lg">{restaurantData.status}</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 col-sm-offset-1">
              <TimelineSemana semana={restaurantData.week}/>
            </div>
            <div className="col-sm-4">
              <h2>Acerca de</h2>
              <p>{restaurantData.dscr}</p>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}