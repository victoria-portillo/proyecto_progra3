import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from "./components/Peliculas/Peliculas";
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch> 
          <Route path="/" component={Home} exact /> 
          <Route path="/peliculas" component={Peliculas} />
          <Route path="/DetallePelicula/id/:id" component={DetallePelicula} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

