import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import { options } from '../../utils/constants'
import './style.css'
import BuscadorFiltro from '../BuscadorFiltro/BuscadorFiltro';

let apiKey= "7d4b7de655aa19e767e9ef8b0e0359b5"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`


class VerTodoPeliculas extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      filtradas: [],
      page:1,
      filtroBusqueda:'',
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      this.setState({
        filtradas: this.props.movies,
      });
    }
  }
  

  componentDidMount(){
    this.setState({
      filtradas: this.props.movies,
    });
    this.traerPeliculas()
  }

  

  traerPeliculas(){
    fetch(peliculasPopulares, options)
      .then(resp => resp.json())
      .then(data => this.setState({
        peliculas: data.results,
        filtradas: data.results
      }))
    .catch(err => console.log(err))
  }
  
  filtrarPeliculas(title){
    const filtroMin = title.toLowerCase(); // Convertir el filtro a minúsculas
    if (filtroMin === '') {
      this.setState({
        filtradas: this.state.peliculas,
        filtroBusqueda: title
      });
    } else {
    
    let peliculasFiltradas = this.state.filtradas.filter((elm)=> elm.title.toLowerCase().includes(filtroMin))
    console.log(peliculasFiltradas );
    this.setState({
        filtradas: peliculasFiltradas,
        filtroBusqueda: title, // Actualiza el filtro de búsqueda en el estado
    })}
}


  render(){
    return (
      <>
      <BuscadorFiltro filtrarPeliculas={(title) => this.filtrarPeliculas(title)} />
      <section className="cajapadre" id="peliculasPopu">
        {this.state.filtradas.map((pelicula) => {
          return (
            <div className='characters-container' key={pelicula.id}>
              <Peliculas
                nombre={pelicula.title}
                imagen={pelicula.poster_path}
                descripcion={pelicula.release_date}
                id={pelicula.id}
                resumen={pelicula.overview}
                TraerMasMovies={this.props.TraerMasMovies}
              />
            </div>
            
          );
        })}
       
      </section>
    </>
    )
  }
}

export default VerTodoPeliculas