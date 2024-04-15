import React, { Component } from 'react'

class BuscadorFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          palabraClave: ''
        };
      }
    evitarSubmit(e){
        e.preventDefault()
        
      }

    regularCambios(e) {
        this.setState(
          {
            palabraClave: e.target.value
          },
          ()=> this.props.filtradoPeliculas(this.state.palabraClave)
          )
      }

    render() {
        return (
          <>
            <form className="formulario" onSubmit={(e)=> this.evitarSubmit(e)}>
                <input className="busqueda" placeholder="Ingresa busqueda" type="text" onChange={(e)=>this.regularCambios(e)} value={this.state.palabraClave} />
                <button className='button'>Buscar</button>
            </form>
            </>
        )
    }
}

export default BuscadorFiltro;