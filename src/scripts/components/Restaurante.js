import React from 'react'
import Header from './Header'
import TimelineSemana from './TimelineSemana'
import Footer from './Footer'

export default class Restaurante extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let restaurant = {
      name: "Celex",
      img: "http://via.placeholder.com/1850x950",
      status: "Open",
      facultad: "FCNM",
      dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulpu" +
          "tate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit" +
          " elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris mo" +
          "lestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iac" +
          "ulis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, veh" +
          "icula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis " +
          "sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam " +
          "odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricie" +
          "s metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, bland" +
          "it sed diam.",
      week: {
        days: [
          {
            date: "Lunes",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }, {
            date: "Martes",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }, {
            date: "Miercoles",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }, {
            date: "Jueves",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }, {
            date: "Viernes",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }, {
            date: "Sabado",
            menus: [
              {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }, {
                img: "http://via.placeholder.com/200x130",
                dscr: "Well prepared food!"
              }
            ]
          }
        ]
      }
    }
    return (
      <div className="container-fluid">
        <Header/>
        <div class="jumbotron">
          <div class="container">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.dscr}</p>
            <p>
              <a class="btn btn-primary btn-lg">{restaurant.status}</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7 col-sm-offset-1">
            <TimelineSemana semana={restaurant.week}/>
          </div>
          <div className="col-sm-4">
            <h2>Acerca de</h2>
            <p>{restaurant.dscr}</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}