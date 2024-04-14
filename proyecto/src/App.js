import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from "./components/Peliculas/Peliculas";
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import NotFound from './screens/NotFound/NotFound';  // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/peliculas" component={Peliculas} />
          <Route path="/DetallePelicula/id/:id" component={DetallePelicula} />
          <Route component={NotFound} /> {/* Esta línea manejará cualquier ruta no definida */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


