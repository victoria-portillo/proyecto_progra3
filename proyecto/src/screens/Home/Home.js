import React, { Component } from 'react'
import { Link } from "react-router-dom" 
import BuscadorFiltro from '../../components/BuscadorFiltro/BuscadorFiltro'
import PeliculasContenedor from '../../components/PeliculasContenedor/PeliculasContenedor'
import { options } from '../../utils/constants'
import VerTodoPeliculas from '../../components/VerTodoPeliculas/VerTodoPeliculas'




class home extends Component{
  constructor(props){
    super(props)
    this.state= {
      busqueda: []
    }
  }

  componentDidMount() {
    
  }


  filtroPeliculas(input){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
    .then(resp => resp.json())
    .then(data => this.setState({
      busqueda: data.results
    }))
    .catch(err => console.log(err))
  }
  
    render(){ 
  return (
    <>
   <section>

        <BuscadorFiltro filtroPeliculas={(input) => this.filtroPeliculas(input)}/>
        {
          this.state.busqueda.length === 0 ?
          <main></main>
          :
          <main><VerTodoPeliculas peliculas={this.state.busqueda}/></main>
        }
        <h2 className=''> Peliculas populares <Link to='/Peliculas'><button className='botonExplorar'>Explorar todas</button></Link></h2>
        <PeliculasContenedor/>
       

    </section>
    </> 
  )
    }
}

export default home;