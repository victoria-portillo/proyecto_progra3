import { Component } from "react";
import { Link } from "react-router-dom";
import './styles.css'

class Buscador extends Component{
    constructor(props) {
        super(props);
        this.state = {
          busqueda: "", 
          resultados: [] 
        };
      }
    
      evitarSubmit(e) {
        e.preventDefault()
      }
    
      regularCambios(e) {
        this.setState(
          {
            busqueda: evento.target.value
          }
        );
      }
    
    
      render() {
        return (
          <div className="">
            <form className="" onSubmit={(e) => this.evitarSubmit(e)} >
              <input 
                type="text"
                placeholder="Ingresar busqueda"
                onChange={(e) => this.regularCambios(e)} value={this.state.busqueda}
              />
              {/* <input type= 'submit' value= 'Submit' /> */}
              <Link to={`/search/${this.state.busqueda}`} className="button">Buscar</Link>
            </form>
          </div>
    
        );
      }
    
    
    }
    
export default Buscador