import React, { useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";
import { TarefaContextType } from "../contexts/TarefaContextType";
import { Tarefa } from "../models/Tarefa";

interface TarefaListaItemProps {
  tarefa: Tarefa;
}

const TarefaListaItem = (props: TarefaListaItemProps) => {

  const { removeTarefa, toggle } = useContext<TarefaContextType>(TarefaContext);

  const onRemove = (tarefa: Tarefa) => {
    removeTarefa(tarefa);
  }

  const handleChange = () => {
    toggle(props.tarefa);
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input className="uk-checkbox" type="checkbox" checked={props.tarefa.done} onChange={handleChange} />
        </label>
      </td>
      <td className="uk-width-expand">{props.tarefa.title}</td>
      <td className="uk-width-auto">
        <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.tarefa)}></button>
      </td>
    </tr>
  );
};

export default TarefaListaItem;
 