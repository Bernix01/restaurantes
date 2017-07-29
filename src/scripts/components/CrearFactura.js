import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Factura from './Factura'

export default class CrearFactura extends React.Component {
    constructor(props) {
        super(props)
    }

    crearFactura(id) {
    let confirmacion = confirm("¿Está seguro que desea eliminar esta factura?");

    if (confirmacion) {
      alert('Eliminando factura...');
      alert(id);
      axios.delete("/api/facturas", {params:{id:id}})
        .then(res => {
          alert(res);
        })
        .catch(error => {
          alert(error);
        });
      window.location.reload();
      
    }
    // alert(id);
    // alert("Hola Mundo estoy eliminando factura");
    // axios.delete("/api/facturas",{params:{id:id}})
    //     .then(res => {
    //       const facturaData = this.state.facturaData.map((factura) =>{
    //         if (factura.deepEqual(res.data)) {
    //           return Object.assign(factura, res.data)
    //         }
    //         // facultad.restaurants.map((restaurant)=>{
    //         //     if(restaurant.deepEqual(res.data)){
    //         //       return Object.assing(restaurant,res.data)
    //         //     }
    //         // })
    //       })
    //       this.setState({facturaData});
    //     });
  }

    render() {
        return (

            <div>
                <Header page={this.props.location.pathname}/>
                <div class="main container-fluid">    
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3">
                            <h1>Crear Factura</h1>
                            <Factura method={"put"}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}