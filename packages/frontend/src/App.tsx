import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pokedex from "./screen/Pokedex";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Baloo Thambi 2';
  }
`

export default function App() {
  
  return (
    <Router>
      <GlobalStyle/>
        <Switch>
          <Route exact path="/">
            <div>ggdgfdjjg</div>
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/about">
            <div>gfdgdg</div>
          </Route>
          <Route path="/dashboard">
            <div>ssss</div>
          </Route>
        </Switch>
    </Router>
  );
}
