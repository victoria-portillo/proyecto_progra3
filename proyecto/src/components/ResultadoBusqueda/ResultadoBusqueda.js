import React, { Component } from 'react';
import BuscadorFiltro from '../BuscadorFiltro/BuscadorFiltro';
import PeliculasContenedor from '../PeliculasContenedor/PeliculasContenedor';

import './styles.css'


class ResultadoDeBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: this.props.match.params.search,
            resultados: [],
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/movie?${this.state.search}`)
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
                <BuscadorFiltro />
                {
                    this.state.resultados.length > 0 ?
                    <div className=''>
                        <ul className=''>
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
                        <h3>Loading..</h3>
                }
                <BuscadorFiltro />
            </>
        )
    }
}

export default ResultadoDeBusqueda;