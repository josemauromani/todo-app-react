import React from "react";
import Navbar from "./Navbar";
import TarefaLista from "./TarefaLista";

const App = () => {
  return (
    <div className="uk-container">
      <Navbar></Navbar>
      <TarefaLista></TarefaLista>
    </div>
  );
};

export default App;
