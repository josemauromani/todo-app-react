import React, { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";
import { TarefaContextType } from "../contexts/TarefaContextType";
import TarefaListaItem from "./TarefaListaItem";

const TarefaLista = () => {
  const { tarefas } = useContext<TarefaContextType>(TarefaContext);
  return (
    <table className="uk-table">
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
