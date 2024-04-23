import React, {Component} from 'react';

import "./style.css";

import Peliculas from "../Peliculas/Peliculas";

class FavoritosContenedor extends Component {
  render() {
    return (
      <div className='favoritosContenedor'>
       
        {this.props.peliculas.length === 0 ? (
          <img className='loader'   src="../img/giphy.gif" />
        ) : (
          this.props.peliculas.map((elm, idx) => (
            <Peliculas
            
              key={idx}
              id={elm.id}
              imagen={elm.poster_path}
              nombre={elm.title}
              resumen={elm.overview}
              actualizarEstado={this.props.actualizarEstado}
            />
          ))
        )}
      </div>
    );
  }
}

export default FavoritosContenedor;
