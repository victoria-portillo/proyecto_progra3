import React, { Component } from 'react';

import { options } from "../../utils/constants";

import VerTodoPeliculas from "../../components/VerTodoPeliculas/VerTodoPeliculas";

import "./style.css";

let claveApi= "7d4b7de655aa19e767e9ef8b0e0359b5";

let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${claveApi}&language=en-US&page=1`;


class VerTodoPelis extends Component {
    constructor(props){
        super(props)
        this.state ={
            pelicula: [], 
            backup: [],
            pagina:1
        }
    }

  componentDidMount(){
    fetch(popular, options)
        .then(response => response.json())
        .then(data => this.setState({
          pelicula: data.results,
            backup: data.results  
        }))
        
        .catch(err => console.error(err));
}
cargarPelis() {
  console.log("Cargando más películas...");
  fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.pagina + 1}`, options)
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
    <div  >
    <VerTodoPeliculas movies={this.state.pelicula} cargarPelis={() => this.cargarPelis()} />
    <p>Página actual: {this.state.pagina}</p>
    <section>
    <button  className='botonExplorar'  onClick={() => this.cargarPelis()}>Cargar más películas</button>
    </section>
  
    </div>
    </>
  )
}}

export default VerTodoPelis;