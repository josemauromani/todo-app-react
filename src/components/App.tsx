import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TarefaContext from "../contexts/TarefaContext";
import Navbar from "./Navbar";
import TarefaAdd from "./TarefaAdd";
import TarefaLista from "./TarefaLista";

const App = () => {
  return (
    <TarefaContext>
      <Router>
        <Navbar></Navbar>
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/add">
              <TarefaAdd></TarefaAdd>
            </Route>
            <Route path="/">
              <h4>Lista de Tarefas</h4>
              <TarefaLista></TarefaLista>
            </Route>
          </Switch>
        </div>
      </Router>
    </TarefaContext>
  );
};

export default App;
