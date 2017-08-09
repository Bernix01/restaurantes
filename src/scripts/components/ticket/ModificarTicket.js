import React from 'react'
import {Link} from 'react-router'

import Header from '../Header'
import Footer from '../Footer'
import Ticket from './TicketForm'

export default class ModificarTicket extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div>
                <Header page={this.props.location.pathname}/>
                <div class="main container-fluid">    
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <h1>Modificar Ticket</h1>
                            <Ticket fid={this.props.match.params.id} update/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}