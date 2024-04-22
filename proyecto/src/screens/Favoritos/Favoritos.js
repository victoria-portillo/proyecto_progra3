import React, { Component } from 'react';
import "./style.css";
import FavoritosContenedor from "../../components/FavoritosContenedor/FavoritosContenedor";



class Favoritos extends Component {
  constructor(props){
    super(props)
    this.state = {
      favoritos: []
    }
  }

  componentDidMount(){
    let guardarFavoritos = localStorage.getItem('favoritos')

    if(guardarFavoritos !== null){
      let favoritosParseados = JSON.parse(guardarFavoritos)
      Promise.all(
        favoritosParseados.map( id => 
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7d4b7de655aa19e767e9ef8b0e0359b5`)

            .then( resp => resp.json())
          )
      ) 
      .then( data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
  }

  actualizarEstado(id) {
    let actulizacionEstado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: actulizacionEstado
    })
  }

  render() {
    return (
      <div>
        <h1>Ver tus peliculas favoritas</h1>
        <FavoritosContenedor 
          actualizarEstado={this.actualizarEstado} 
          peliculas={this.state.favoritos}  
        />
      </div>
    );
  }
}

export default Favoritos;
