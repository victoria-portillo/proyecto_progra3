import React, { Component } from 'react';
import Peliculas from '../Peliculas/Peliculas';
import BuscadorFiltro from '../BuscadorFiltro/BuscadorFiltro';

let apiKey = "7d4b7de655aa19e767e9ef8b0e0359b5";
let peliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

class VerTodoPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      buscador: '',
    };
  }

  componentDidMount() {
    this.extraerPeliculas();
  }

  extraerPeliculas() {
    fetch(peliculasPopulares)
      .then(resp => resp.json())
      .then(data => this.setState({
        peliculas: data.results,
        peliculasFiltradas: data.results
      }))
      .catch(err => console.log(err));
  }

  filtradoPeliculas(titulo) {
    const filtro = titulo.toLowerCase();
    const filtradas = filtro ? this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(filtro)) : this.state.peliculas;
    
    this.setState({
      peliculasFiltradas: filtradas,
      buscador: titulo,
    });
  }

  render() {
    return (
      <>
        <BuscadorFiltro filtradoPeliculas={(titulo) => this.filtradoPeliculas(titulo)} />
        <section>
          {this.state.peliculasFiltradas.map((pelicula) => (
            <div key={pelicula.id}>
              <Peliculas
                nombre={pelicula.title}
                imagen={pelicula.poster_path}
                descripcion={pelicula.release_date}
                id={pelicula.id}
                overview={pelicula.overview}
                TraerMasPeliculas={this.props.TraerMasPeliculas}
              />
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default VerTodoPeliculas;
