import React, { Component } from "react";

import "./styles.css";

import { options } from "../../utils/constants";

import Peliculas from "../../components/Peliculas/Peliculas";



class ResultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: this.props.match.params.busqueda,
            resultadosPelis: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}`, options)
            .then((response) => response.json())
            .then((resultadosBusqueda) =>
               this.setState({
                resultadosPelis: resultadosBusqueda.results
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
                            fechaEstreno={resultado.release_date} 
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