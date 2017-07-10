import React from 'react'

export default class Dia extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {date, menus} = this.props
      return (
      <section>
        <h3>{date}</h3>
        <div className="row">
          {menus.map((menu, index) => {
            return (
              <div className="menu col-sm-6" key={index}>
                <img src={menu.img} alt={menu.name} className="img-menu img-responsive"/>
                <p className="menu-dscr">{menu.dscr}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}