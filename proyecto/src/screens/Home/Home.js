import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Buscador from '../../components/Buscador/Buscador';
import PeliculasContenedor from '../../components/PeliculasContenedor/PeliculasContenedor';
import VerTodoPeliculas from '../../components/VerTodoPeliculas/VerTodoPeliculas';
import './style.css';
import PeliculasTopRated from '../../components/PeliculasTopRated/PeliculasTopRated';

let options = {}; // Asegúrate de definir esto correctamente en tus constantes

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: []
    };
  }

  filtroPeliculas(input) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
      .then(resp => resp.json())
      .then(data => this.setState({
        busqueda: data.results
      }))
      .catch(err => console.log(err));
  }

  render() { 
    return (
      <section>
        <Buscador filtroPeliculas={(input) => this.filtroPeliculas(input)} />
        {this.state.busqueda.length === 0 ?
          <main> </main> :
          <main><VerTodoPeliculas peli={this.state.busqueda} /></main>
        }
        <h2 className='subtitulo'>Peliculas populares <Link to='/VerTodoPelis'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasContenedor />
        
        <h2 className='subtitulo'>Peliculas Top Rated <Link to='/VerTodoRated'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasTopRated  />
      </section>
    );
  }
}

export default Home;