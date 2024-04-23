import './styles.css'
import { Component } from "react"
import { Link } from "react-router-dom" 

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: '',
            mostrar: false,
            mensaje: 'Desplegar descripcion',
            estaEnFavoritos: false
        }
    }

    componentDidMount() {
        this.verificarFavorito();
    }

    verificarFavorito() {
        const favoritosString = localStorage.getItem('favoritos');
        const favoritos = favoritosString ? JSON.parse(favoritosString) : [];
        const estaEnFavoritos = favoritos.includes(this.props.id);
        this.setState({ estaEnFavoritos });
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    descripcion() {
        const mostrar = !this.state.mostrar;
        const mensaje = mostrar ? "Ocultar descripcion" : "Desplegar descripcion";
        this.setState({ mostrar, mensaje });
    }

    Favorito() {
        const { id } = this.props;
        const estaEnFavoritos = !this.state.estaEnFavoritos;

        let favoritos = [];
        const favoritosString = localStorage.getItem('favoritos');
        if (favoritosString) {
            favoritos = JSON.parse(favoritosString);
        }
        
        if (estaEnFavoritos) {
            favoritos.push(id);
        } else {
            favoritos = favoritos.filter(movieId => movieId !== id);
        }
        
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        this.setState({ estaEnFavoritos });
    }

    render() {
        return (
            <article>
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} alt={this.props.nombre} />
                <p className="nombrePeli">{this.props.nombre}</p>
                <p className="descripcionOculta" onClick={() => this.descripcion()}>{this.state.mensaje}</p>
                {this.state.mostrar ? <h5 className="resumen">{this.props.resumen}</h5> : null}
                <Link to={`/PeliculaDetalle/id/${this.props.id}`}>
                    <button className="buttonStyle">Ir a detalle</button>
                </Link>
                <button className='buttonStyle'   onClick={() => this.Favorito()}>
                    {this.state.estaEnFavoritos ? "Quitar de Favoritos" : "Agregar a Favoritos"}
                </button>
            </article>
        );
    }
}

export default Peliculas;