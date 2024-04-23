import React, { Component } from 'react';

import "./styles.css";

import { Link } from "react-router-dom";

import { options } from '../../utils/constants';



class PeliculaDetalle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataPeliculas: null,
      generos: [],
      estaEnFavorito: false
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
      .then(resp => resp.json())
      .then(data =>

        this.setState({
          generos: data.genres.map((genre) => genre.name),
          dataPeliculas: data,
        }, () => {
          let guardarFavoritos = localStorage.getItem('favoritos')

          let arrayParseado = JSON.parse(guardarFavoritos)

          if (arrayParseado !== null) {
            let peliculaElegida = arrayParseado.includes(this.state.dataPeliculas.id)

            if (peliculaElegida) {
              this.setState({ estaEnFavorito: true })
            }
          }
        }),
      )
      .catch(err => console.log(err))
  }

  agregandoFavoritos(idPelicula) {

    let guardarFavoritos = localStorage.getItem('favoritos')

    if (guardarFavoritos === null) {
      let arraysId = [idPelicula]

      let arrayStringificado = JSON.stringify(arraysId)

      localStorage.setItem('favoritos', arrayStringificado)

    } else {

      let arrayParseado = JSON.parse(guardarFavoritos)

      arrayParseado.push(idPelicula)

      let arrayStringificado = JSON.stringify(arrayParseado)

      localStorage.setItem('favoritos', arrayStringificado)
    }

    this.setState({

      estaEnFavorito: true

    })
  }


  sacandoFavoritos(idPelicula) {
    let guardarFavoritos = localStorage.getItem('favoritos')

    let arrayParseado = JSON.parse(guardarFavoritos)

    let favoritosFiltrados = arrayParseado.filter((id) => id !== idPelicula)

    let arrayStringificado = JSON.stringify(favoritosFiltrados)

    localStorage.setItem('favoritos', arrayStringificado)

    this.setState({

      estaEnFavorito: false

    })

  }

  render() {
    return (
      <>
        {
          this.state.dataPeliculas === null ?

            <div className='container'>

              <img src="../img/giphy.gif" />

            </div>
            :
            <section className='sectionDetalle'>

              <div className='character-card'>

                <Link to={`/movie/id/${this.state.dataPeliculas.id}`}>

                  <img src={'https://image.tmdb.org/t/p/w500/' + this.state.dataPeliculas.poster_path} alt={this.state.dataPeliculas.title} className='image' /></Link>

              </div>

              <article className="cajahijapelis">

                <h2 className="titulo" > {this.state.dataPeliculas.title}</h2>

                <p className="subtitulo">RATING: {this.state.dataPeliculas.vote_average}</p>

                <p className="subtitulo">FECHA DE ESTRENO:  {this.state.dataPeliculas.release_date}</p>

                <p className="subtitulo">GÉNERO:  {this.state.generos.join(', ')} </p>

                <p className="subtitulo">DURACIÓN: {this.state.dataPeliculas.runtime} minutos</p>
                
                <p className="subtitulo">SINOPSIS: {this.state.dataPeliculas.overview}</p>
                {
                  this.state.estaEnFavorito ?
                    <button className='buttonStyle' onClick={() => this.sacandoFavoritos(this.state.dataPeliculas.id)}>
                      Sacar de Favoritos
                    </button>
                    :
                    <button className='buttonStyle' onClick={() => this.agregandoFavoritos(this.state.dataPeliculas.id)}>
                      Agregar a Favoritos
                    </button>
                }

              </article>

            </section>

        }
      </>
    )
  }
}

export default PeliculaDetalle;