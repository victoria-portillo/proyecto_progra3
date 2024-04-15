import React, {Component} from 'react'
import Peliculas from '../Peliculas/Peliculas'
import './style.css'


 class FavoritosContenedor extends Component {
    constructor(props){
        super(props) 
        this.state = {
            favoritos: [],
            
  
          } }
       
    render() {
    return (
      <>
      <div className='favContainer'>

        {
          this.props.peliculas.length === 0?
          <img src= "../img/giphy.gif" alt="Trayendo Peliculas" /> :       
           this.props.peliculas.map((elm, idx) => <Peliculas  id = {elm.id} imagen = {elm.poster_path} nombre = {elm.title} resumen = {elm.overview} actualizarState ={(id)=> this.actualizarState(id)} peliculas={this.state.favoritos}/>
        )
        }
        
      </div>
      </>
    )
  }
}
export default FavoritosContenedor