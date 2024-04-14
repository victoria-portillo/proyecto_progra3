import './styles.css';
import { Component } from "react";
import { Link } from "react-router-dom";

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false,
            mensaje: 'Ver descripción',
        };
    }

    descripcion = () => {
        this.setState(prevState => ({
            mostrar: !prevState.mostrar,
            mensaje: prevState.mostrar ? "Ver descripción" : "Ocultar descripción"
        }));
    }

    render() {
        return (
            <>
                <article>
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} 
                    alt={this.props.nombre} />
                    <p className="nombrePeli">{this.props.nombre}</p>
                    <p className="descripcionOculta" onClick={this.descripcion}>
                        {this.state.mensaje}
                    </p>
                    {this.state.mostrar ? <h5 className="resumen">{this.props.resumen}</h5> : null}
                    <Link to={`/DetallePelicula/id/${this.props.id}`}>
                        <button type="button" className="verMas">Ir a detalle</button>
                    </Link>
                </article>
            </>
        )
    }   
}

export default Peliculas;
