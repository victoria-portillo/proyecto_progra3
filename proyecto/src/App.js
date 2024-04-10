import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Peliculas from "./components/Peliculas/Peliculas"

import Home from"./screens/Home/Home"



function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        
      </Switch>
      

        

       
      <Footer />
    </div>
  );
}