import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import './styles.css'

let apiKey= "7d4b7de655aa19e767e9ef8b0e0359b5"
let api= `https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`
let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let bestRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`


class PeliculasContenedor extends Component {
  constructor(props){
    super(props)
    this.state = {
      peliculas: [],
      backup:[],
      page:1
    }
  }

  componentDidMount(){
    this.extraerPeliculas()
  }

  extraerPeliculas(){
    fetch(popular)
    .then(resp => resp.json())
    .then(data => this.setState({
      peliculas: data.results,
      backup: data.results
    }))
    .catch(err => console.log(err))
  }
  

  filtrarPersonajes(nombre){
    let personajesFiltrados = this.state.backup.filter((elm) => elm.name.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      personajes: personajesFiltrados,
    })
  }

  render(){
    return (
      <>
       <section className=""  >
        {
          this.state.peliculas.length === 0 ? 
          <img src= "../img/giphy.gif"
           /> :
          this.state.peliculas.map((pelicula, index)=> {
            if (index < 5){
              return(
              <>
              <Peliculas 
                nombre={pelicula.title} 
                imagen={pelicula.poster_path} 
                descripcion={pelicula.release_date} 
                id={pelicula.id} 
                resumen={pelicula.overview}
              />
              </>
              )
            }
          }
          )
        }
      
      </section>
      </>
    )
  }
}

export default PeliculasContenedor