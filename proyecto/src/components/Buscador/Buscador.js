import { Component } from "react";

import "./styles.css";

import { Link } from "react-router-dom";



class Buscador extends Component{
    constructor(props) {
        super(props);
        this.state = {
          busqueda: "", 
          resultados: [] 
        };
      }


    
      noSubmit(e) {
        e.preventDefault()
      }
    
      regularCambios(e) {
        this.setState(
          {
            busqueda: e.target.value
          }
        );
      }
    
    
      
      render() {
        return (
          <div className="form">
            <form className="busqueda" onSubmit={(e) => this.noSubmit(e)} >

              <input type="text" placeholder="Ingresar busqueda" onChange={(e) => this.regularCambios(e)} value={this.state.busqueda}/>
              
              
            <Link to={`/buscar/${this.state.busqueda}`} className="botonBusqueda">Ver resultados</Link>

            </form>
            
          </div>
    
        );
      }
    
    
    }
    
export default Buscador;