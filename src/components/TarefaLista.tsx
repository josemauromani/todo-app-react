import React from "react";
import { Tarefa } from "../models/Tarefa";
import TarefaListaItem from "./TarefaListaItem";

const TarefaLista = () => {
  const tarefas: Tarefa[] = [];
  return(
    <table className="uk-table">
      <caption>Lista Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          tarefas?.map(
            tarefa => (
              <TarefaListaItem tarefa={tarefa} key={tarefa.id}></TarefaListaItem>
            )
          )
        }
      </tbody>
    </table>
    );
};

export default TarefaLista;
