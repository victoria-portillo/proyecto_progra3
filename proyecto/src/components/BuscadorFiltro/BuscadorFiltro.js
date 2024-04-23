import React, { Component } from 'react';


class BuscadorFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          palabraClave: ''
        };
      }


    noSubmit(e){

        e.preventDefault()
        
      }

    regularCambios(e) {

        this.setState(
          {
            palabraClave: e.target.value
          },

          ()=> this.props.pelisFiltrador(this.state.palabraClave)

          )
      }

    render() 
     { return (<>

            <form className="form" onSubmit={(e)=> this.noSubmit(e)}>

            <input className="busqueda" placeholder="Ingresar busqueda" type="text" onChange={(e)=>this.regularCambios(e)} value={this.state.palabraClave} />

            <button className='botonBusqueda'> Ver resultados </button>
            
            </form>
            </>
        )
    }
}

export default BuscadorFiltro;