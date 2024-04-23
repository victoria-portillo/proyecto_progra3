import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from "./components/Peliculas/Peliculas";
import PeliculaDetalle from './screens/PeliculaDetalle/PeliculaDetalle';
import ResultadoBusqueda from './screens/ResultadoBusqueda/ResultadoBusqueda'
import NotFound from './screens/NotFound/NotFound';  // Asegúrate de que la ruta de importación sea correcta
import VerTodoPelis from './screens/VerTodoPelis/VerTodoPelis';
import VerTodoRated from './screens/VerTodoRated/VerTodoRated';
import Favoritos  from './screens/Favoritos/Favoritos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container"  >
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/peliculas" component={Peliculas} />
          <Route path={'/VerTodoPelis'} component={VerTodoPelis} />
          <Route path={'/VerTodoRated'} component={VerTodoRated} />
          <Route path={'/Favoritos'} component={Favoritos} />
          <Route path="/PeliculaDetalle/id/:id" component={PeliculaDetalle} />
          <Route path={'/buscar/:busqueda'} component = {ResultadoBusqueda}/>
          <Route component={NotFound} /> {/* Esta línea manejará cualquier ruta no definida */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
