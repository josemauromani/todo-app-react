import React, { createContext, useEffect, useState } from 'react';
import { Tarefa } from '../models/Tarefa';
import { get, save } from '../services/TarefaService';
import { TarefaContextType } from './TarefaContextType';

export const TarefaContext = createContext<TarefaContextType>({
  tarefas: [],
  addTarefa: () => { },
  removeTarefa: () => { },
  toggle: () => { },
});

const TarefaProvider = (props: any) => {

  const [tarefas, setTarefas] = useState<Tarefa[]>(get);

  useEffect(() => {
    save(tarefas);
  }, [tarefas]);

  const addTarefa = (title: any) => {
    const tarefa: Tarefa = { id: tarefas.length + 1, title: title, done: false }
    setTarefas([...tarefas, tarefa]);
  }

  const removeTarefa = (tarefa: Tarefa) => {
    const index = tarefas.indexOf(tarefa);
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  const toggle = (tarefa: Tarefa) => {
    const index = tarefas.indexOf(tarefa);
    tarefas[index].done = !tarefa.done;
    setTarefas([...tarefas]);
  }

  return (
    <TarefaContext.Provider value={{ tarefas, addTarefa, removeTarefa, toggle }}>
      {props.children}
    </TarefaContext.Provider>
  )
}

export default TarefaProvider;