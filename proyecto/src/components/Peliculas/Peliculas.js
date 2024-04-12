import './styles.css'
import { Component } from "react"
import { Link } from "react-router-dom";





class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state={
            valor: '',
            mostrar: false,
            mensaje: 'Ver descripcion',
            
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    descripcion(){
        if (this.state.mostrar ===true ){this.setState({mostrar: false, mensaje: "Ver descripcion"})}
        else{this.setState({mostrar: true, mensaje: "Ocultar descripcion"})}
    }
    // 


    render(){
        return(
            < >
        <article >
           <img src= {`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} 
          alt={this.props.nombre} />
          <p className="nombrePeli">{this.props.nombre}</p>
          <p className="descripcionOculta"onClick={() => this.descripcion ()}>{this.state.texto}</p>
                    {this.state.mostrar ? <h5 className="resumen">{this.props.resumen}</h5> : ""}
                    <Link to={`/DetallePelicula/id/${this.props.id}`}>
            <button type="" className="verMas">Ir a detalle</button>
            </Link>
       
           
        </article>
        
        </>
        )
    }
}

export default Peliculas;