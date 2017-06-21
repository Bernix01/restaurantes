import React from 'react'

import Dia from './Dia'

export default class TimelimeSemana extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {days} = this.props.semana

    return (
      <div className="row">
        {days.map((dia, index) => {
          if (index % 2 === 0) 
            return (
              <div className="row" key={index}>
              <div className="col-sm-6">
                <Dia date={dia.date} menus={dia.menus}/>
              </div></div>
            )
          else 
            return (
              <div className="row" key={index}>
              <div className="col-sm-6 col-sm-offset-6">
                <Dia date={dia.date} menus={dia.menus}/>
              </div></div>
            )
        })
}
      </div>
    )
  }
}