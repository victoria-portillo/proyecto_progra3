import React, { Component } from "react";
import './styles.css'
import Peliculas from "../../components/Peliculas/Peliculas";


import { options } from "../../utils/constants";


class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: this.props.match.params.search,
            resultadosPelis: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.search}`, options)
            .then((response) => response.json())
            .then((resultados_busqueda) =>
               this.setState({
                resultadosPelis: resultados_busqueda.results
                }
            )
            )
            .catch(error => console.log(error));
           
    }
    

    render() {
        return (
            <>
               
                {
                    this.state.resultadosPelis.length > 0 ?
                        <ul className="ulBusqueda">
                        {
                            this.state.resultadosPelis.map((resultado) => 
                            <section className="cajapadre" id="peliculasPopu">
                            <Peliculas 
                            id={resultado.id} 
                            nombre={resultado.title} 
                            imagen={resultado.poster_path} 
                            descripcion={resultado.release_date} 
                            resumen={resultado.overview}
                             />
                             </section>
                             
                            )                        
                        }
                        </ul> :
                                                  <img src= "../img/giphy.gif" alt="Trayendo Peliculas" /> 
                                              
                }
            </>
        )
    }
}

export default ResultadoBusqueda;