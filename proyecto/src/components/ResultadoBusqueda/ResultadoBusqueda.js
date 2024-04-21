import React, { Component } from 'react';

import "./styles.css";

import Buscador from '../Buscador/Buscador';

import PeliculasContenedor from '../PeliculasContenedor/PeliculasContenedor';


class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: this.props.match.params.busqueda,
            resultados: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?${this.state.busqueda}`)
            .then((response) => response.json())
            .then((resultadosBusqueda) =>
                this.setState({
                    resultados: resultadosBusqueda.data
                }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <Buscador/>
                {
                    this.state.resultados.length > 0 ?
                    <div className='cajaPadre'>
                        <ul className='cajaPadre'>
                            <PeliculasContenedor
                                album={false}
                                value={this.state.resultados.map(resultado => ({
                                    id: resultado.id,    
                                    nombre: resultado.title,
                                    imagen: resultado.poster_path,
                                    resumen: resultado.overview
                                }))}
                            />
                            
                        </ul>
                        </div> :
                        <h3>Cargando</h3>
                }
                <Buscador />
            </>
        )
    }
}

export default ResultadoBusqueda;