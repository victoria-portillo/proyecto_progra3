import React, { Component } from 'react'
import FavoritosContenedor from '../../components/FavoritosContenedor/FavoritosContenedor'
import './style.css';


class Favoritos extends Component {

  constructor(props){
    super(props)
    this.state = {
      favoritos: [],

    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('favoritos')

    if(storageFavs !== null){
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map( id => 
            fetch('https://api.themoviedb.org/3/movie/' + id)
            .then( resp => resp.json())
          )
      ) 
      .then( data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
    
    
  }

  


  actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }
  

   render() {
    return (
       <div>
        <h1>Tus favoritos</h1>
        <FavoritosContenedor actualizarState ={(id)=> this.actualizarState(id)} peliculas={this.state.favoritos}  />
      </div>
    )
   }


  
}

export default Favoritos