import React, { Component } from 'react';

import "./style.css";

import { Link } from "react-router-dom";

import PeliculasTopRated from "../../components/PeliculasTopRated/PeliculasTopRated";

import PeliculasContenedor from "../../components/PeliculasContenedor/PeliculasContenedor";

import VerTodoPeliculas from "../../components/VerTodoPeliculas/VerTodoPeliculas";

import Buscador from "../../components/Buscador/Buscador";


let options = {}; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: []
    };
  }

  filtroDePeliculas(elemento) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${elemento}&include_adult=false&language=en-US&page=1`, options)
      .then(resp => resp.json())
      .then(data => this.setState({
        busqueda: data.results
      }))
      .catch(err => console.log(err));
  }

  render() { 
    return (
      <section>
        <Buscador filtroDePeliculas={(elemento) => this.filtroDePeliculas(elemento)} />
        
        {this.state.busqueda.length === 0 ?
          <main> </main> :
          <main><VerTodoPeliculas peli={this.state.busqueda} /></main>
        }
        <h2 className='subtituloHome'>Peliculas populares <Link to='/VerTodoPelis'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasContenedor />
        
        <h2 className='subtituloHome'>Peliculas Top Rated <Link to='/VerTodoRated'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasTopRated  />
      </section>
    );
  }
}

export default Home;