import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import BuscadorFiltro from '../BuscadorFiltro/BuscadorFiltro';
import { options } from '../../utils/constants';



let apiKey= "7d4b7de655aa19e767e9ef8b0e0359b5"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`


class VerTodoPeliculas extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      filtrado: [],
      pagina:1,
      buscador:'',
    }
  }
  componentDidUpdate(props) {
    if (this.props.peli !== props.peli) {
      this.setState({
        peliculasFiltradas: this.props.peli,
      });
    }
  }
  

  componentDidMount(){
    this.setState({
      peliculasFiltradas: this.props.peli,
    });
    this.extraerPeliculas()
  }

  

  extraerPeliculas(){
    fetch(peliculasPopulares, options)
      .then(resp => resp.json())
      .then(data => this.setState({
        peliculas: data.results,
        peliculasFiltradas: data.results
      }))
    .catch(err => console.log(err))
  }
  
  filtradoPeliculas(titulo){
    const filtro = titulo.toLowerCase(); // Convertir el filtro a minúsculas
    if (filtro === '') {
      this.setState({
        peliculasFiltradas: this.state.peliculas,
        buscador: titulo
      });
    } else {
    
    let filtradas = this.state.peliculasFiltradas.filter((elm)=> elm.title.toLowerCase().includes(filtro))
    console.log(filtradas );
    this.setState({
        peliculasFiltradas: filtradas,
        buscador: titulo, // Actualiza el filtro de búsqueda en el estado
    })}
}


  render(){
    return (
      <>
      <BuscadorFiltro filtradoPeliculas={(titulo) => this.filtrarPeliculas(titulo)} />
      <section className="" >
        {this.state.peliculasFiltradas.map((pelicula) => {
          return (
            <div className='' key={pelicula.id}>
              <Peliculas
                nombre={pelicula.title}
                imagen={pelicula.poster_path}
                descripcion={pelicula.release_date}
                id={pelicula.id}
                overview={pelicula.overview}
                TraerMasPeliculas={this.props.TraerMasPeliculas}
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