import React from 'react'
import {Link} from 'react-router'

import Header from '../Header'
import Footer from '../Footer'
import Recibo from './ReciboForm'

export default class ModificarRecibo extends React.Component {
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
                            <h1>Modificar Recibo</h1>
                            <Recibo fid={this.props.match.params.id} update/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}