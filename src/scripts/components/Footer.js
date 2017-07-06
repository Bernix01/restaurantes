import React from 'react'
import {connect} from "react-redux"



@connect((store) => {
  return {}
})
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
	      <div class="container">
	      	I'm the footer.
	      </div>
      </footer>
    )
  }
}
