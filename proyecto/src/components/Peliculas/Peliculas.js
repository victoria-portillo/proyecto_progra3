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
     
        const { mostrar } = this.state;

   
        this.setState({
            mostrar: !mostrar,
            mensaje: mostrar ? "Ocultar descripción" : "Ver descripción"
        });
    }

    render() {
        const { imagen, nombre, resumen, id } = this.props; 
        const { mostrar, mensaje } = this.state;           

        return (
            <>
                <article>
                    <img src={`https://image.tmdb.org/t/p/w500/${imagen}`} 
                    alt={nombre} />
                    <p className="nombrePeli">{nombre}</p>
                    <p className="descripcionOculta" onClick={this.descripcion}>
                        {mensaje}
                    </p>
                    {mostrar ? <h5 className="resumen">{resumen}</h5> : null}
                    <Link to={`/DetallePelicula/id/${id}`}>
                        <button type="button" className="verMas">Ir a detalle</button>
                    </Link>
                </article>
            </>
        );
    }    
}

export default Peliculas;