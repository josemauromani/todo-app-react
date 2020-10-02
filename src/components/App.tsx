import React from "react";
import TarefaContext from "../contexts/TarefaContext";
import Navbar from "./Navbar";
import TarefaLista from "./TarefaLista";

const App = () => {
  return (
    <TarefaContext>
      <div className="uk-container">
        <Navbar></Navbar>
        <TarefaLista></TarefaLista>
      </div>
    </TarefaContext>
  );
};

export default App;
