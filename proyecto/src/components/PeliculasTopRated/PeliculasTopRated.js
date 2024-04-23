import React, { Component } from 'react';

import "./style.css";

import Peliculas from "../Peliculas/Peliculas";


let claveApi = "7d4b7de655aa19e767e9ef8b0e0359b5";

let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${claveApi}&language=en-US&page=1`;


class PeliculasTopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      backup: [],
    };
  }

  componentDidMount() {
    this.extraerPeliculas();
  }

  extraerPeliculas() {
    fetch(topRated)
      .then(resp => resp.json())
      .then(data => this.setState({
        peliculas: data.results,
        backup: data.results
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="cajapadre"  >
      {this.state.peliculas.length === 0 ? (
          <img className='loader' src="../img/giphy.gif" alt="Cargando" />
        ) : (
          this.state.peliculas.slice(0, 5).map((pelicula) => (
            <Peliculas
              key={pelicula.id}
              nombre={pelicula.title}
              imagen={pelicula.poster_path}
              descripcion={pelicula.release_date}
              id={pelicula.id}
              resumen={pelicula.overview}
            />
          ))
        )}
      </section>
    );
  }
}

export default PeliculasTopRated;
