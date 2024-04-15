import React from 'react'
import { Link } from "react-router-dom"
import './style.css'

export default function Header() {

    return (
        <header>
        <nav className="navh">
            <img src="../img/panda.png" className="logo" alt="" />
            <div className="headera">
            <Link  to="/"><h1>Home</h1></Link>
            <Link  to="/favoritos"><h1>Favoritos</h1></Link>
            <Link  to="/VerTodoPelis"><h1>Películas</h1></Link>
            </div>
        </nav>
       </header>
    )
  }