import React from "react";
import { Tarefa } from "../models/Tarefa";

interface TarefaListaItemProps {
  tarefa: Tarefa;
}

const TarefaListaItem = (props: TarefaListaItemProps) => {

  const onRemove = (tarefa: Tarefa) => {
    console.log(tarefa);
  }

  const handleChange = () => {
    console.log('mudou');
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
 