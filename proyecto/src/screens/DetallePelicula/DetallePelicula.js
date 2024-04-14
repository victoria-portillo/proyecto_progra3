import './styles.css'
import React, { Component } from 'react'
import { options } from '../../utils/constants'
import { Link } from "react-router-dom"

class DetallePelicula extends Component {
  
  constructor(props){
    super(props)
    this.state={
        dataPeliculas:null,
        generos: [],
        esFavorito: false
    }
}

  componentDidMount(){
    
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)

    .then(resp => resp.json())
    .then(data => 
      this.setState({
      
      generos: data.genres.map((genre) => genre.name),
      dataPeliculas: data,
      
    },
    () => {
      let storageFav = localStorage.getItem('favoritos')
      let arrParseado = JSON.parse(storageFav)

      if (arrParseado !== null){
        let estaMiPelicula = arrParseado.includes(this.state.movieData.id)
        if(estaMiPelicula){
          this.setState({
            esFavorito: true
          })
        }
      }
    }

    ), )
    .catch(err => console.log(err))


  }

  agregarAFavoritos(idPersonaje){
    let storageFav = localStorage.getItem('favoritos')
    if(storageFav === null){
      let arrIds = [idPersonaje]
      let arrStringificado = JSON.stringify(arrIds)
      localStorage.setItem('favoritos', arrStringificado)
    } else {
      let arrParseado = JSON.parse(storageFav)
      arrParseado.push(idPersonaje)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('favoritos', arrStringificado)
    }

    this.setState({
      esFavorito: true
    })
  }
  sacarDeFavoritos(idPersonaje){
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)
    let favsFiltrados = arrParseado.filter((id) => id !== idPersonaje)
    let arrStringificado = JSON.stringify(favsFiltrados)
    localStorage.setItem('favoritos', arrStringificado)
    
    this.setState({
      esFavorito: false
    })
    
  }

  

  render() {
    return (
      <>
      {
        this.state.dataPeliculas === null ?
        <div className='container'>
          <img src= "../img/giphy.gif"
          alt="Trayendo Peliculas" />
          </div>
        :
           <section className='sectionDetalle'>
            <div className='character-card'>
              <Link to={`/movie/id/${this.state.dataPeliculas.id}`}><img src= { 'https://image.tmdb.org/t/p/w500/'+this.state.dataPeliculas.poster_path} alt={this.state.dataPeliculas.title} className='image'/></Link>
            </div>
              <article className="cajahijapelis">
              <h2 className="titulo" > {this.state.dataPeliculas.title}</h2>
              <p className="subtitulo">RATING: {this.state.dataPeliculas.vote_average}</p>
              <p className="subtitulo">FECHA DE ESTRENO:  { this.state.dataPeliculas.release_date}</p>
              <p className="subtitulo">GÉNERO:  { this.state.generos.join(', ')} </p>
              
              <p className="subtitulo">DURACIÓN: {this.state.dataPeliculas.runtime} minutes</p>
              <p className="subtitulo">SINOPSIS: {this.state.dataPeliculas.overview}</p>
              {
                this.state.esFavorito ? 
                <button onClick = {() => this.sacarDeFavoritos(this.state.dataPeliculas.id)}>
                  Sacar de Favoritos
                </button>
                : 
                <button onClick = {() => this.agregarAFavoritos(this.state.dataPeliculas.id)}>
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

export default DetallePelicula;