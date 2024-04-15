import React, { Component } from 'react'
import { options } from '../../utils/constants'
import VerTodoPeliculas from '../../components/VerTodoPeliculas/VerTodoPeliculas'
let apiKey= "7d4b7de655aa19e767e9ef8b0e0359b5"
let peliculasPopulares = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

class VerTodoRated extends Component {
    constructor(props){
        super(props)
        this.state ={
            pelicula: [], 
            backup: [],
            pagina:1
        }
    }

  componentDidMount(){
    fetch(peliculasPopulares, options) //poner todas las peliculas
        .then(response => response.json())
        .then(data => this.setState({
          pelicula: data.results,
            backup: data.results  
        }))
        
        .catch(err => console.error(err));
}
cargarPelis() {
  console.log("Cargando más películas...");
  fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${this.state.pagina + 1}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(this.state.pagina + 1)
      console.log("Nuevos datos:", data);
      this.setState({
        pelicula: this.state.pelicula.concat(data.results),
        backup: this.state.backup.concat(data.results),
        pagina: this.state.pagina + 1
      });
    })
    .catch(err => console.log(err))
}



render(){

  return (
    <>
    <VerTodoPeliculas movies={this.state.pelicula} cargarPelis={() => this.cargarPelis()} />
    <p>Página actual: {this.state.pagina}</p>
    <section>
    <button onClick={() => this.cargarPelis()}>Cargar más películas</button>
    </section>
    <br></br>
    </>
  )
}}

export default VerTodoRated