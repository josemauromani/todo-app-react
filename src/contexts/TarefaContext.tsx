import React, { createContext } from 'react';
import { Tarefa } from '../models/Tarefa';
import { TarefaContextType } from './TarefaContextType';

export const TarefaContext = createContext<TarefaContextType>({
  tarefas: [],
  addTarefa: () => { },
  removeTarefa: () => { },
  toggle: () => { },
});

const TarefaProvider = (props: any) => {

  const tarefas: Tarefa[] = [
    { id: 1, title: 'Planning', done: true },
    { id: 2, title: 'Review', done: false }
  ];

  const addTarefa = (title: any) => {
    console.log('Adicionou ' + title);
  }

  const removeTarefa = (tarefa: Tarefa) => {
    console.log('Removeu ' + tarefa.title);
  }

  const toggle = (tarefa: Tarefa) => {
    console.log('Alterou ' + tarefa.title);
  }

  return (
    <TarefaContext.Provider value={}>
      {props.children}
    </TarefaContext.Provider>
  )
}

export default TarefaProvider;