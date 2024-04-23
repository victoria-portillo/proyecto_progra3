import React, {Component} from 'react';

import "./style.css";

import { options } from "../../utils/constants";

import Peliculas from "../Peliculas/Peliculas";

import BuscadorFiltro from '../BuscadorFiltro/BuscadorFiltro';

let claveApi= "7d4b7de655aa19e767e9ef8b0e0359b5";

let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${claveApi}&language=en-US&page=1`;


class VerTodoPeliculas extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      filtro: [],
      pagina: 1,
      filtroBusqueda:'',
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({
        filtro: this.props.movies,
      });
    }
  }
  

  componentDidMount(){
    this.setState({
      filtro: this.props.movies,
    });
    this.extraerPeliculas()
  }

  

  extraerPeliculas(){
    fetch(popular, options)
      .then(resp => resp.json())
      .then(data => this.setState({
        peliculas: data.results,
        filtro: data.results
      }))
    .catch(err => console.log(err))
  }
  
  pelisFiltrador(titulo){
    const convertirMin = titulo.toLowerCase(); 
    if ( convertirMin === '') {
      this.setState({
        filtro: this.state.peliculas,
        filtroBusqueda: titulo
      });
    } else {
    
    let filtroPeliculas = this.state.filtro.filter((elm)=> elm.title.toLowerCase().includes(convertirMin))
  
    this.setState({
        filtro: filtroPeliculas,
        filtroBusqueda: titulo, 
    })}
}


  render(){
    return (
      <>
      <BuscadorFiltro pelisFiltrador={(titulo) => this.pelisFiltrador(titulo)} />
      <section className="cajapadre" id="peliculasPopu">
        {this.state.filtro.map((pelicula) => {
          return (
            <div className='characters-container' key={pelicula.id}>
              <Peliculas
                nombre={pelicula.title}
                imagen={pelicula.poster_path}
                fechaEstreno={pelicula.release_date}
                id={pelicula.id}
                resumen={pelicula.overview}
                cargarPelis={this.props.cargarPelis}
              />
            </div>
            
          );
        })}
       
      </section>
    </>
    )
  }
}

export default VerTodoPeliculas;