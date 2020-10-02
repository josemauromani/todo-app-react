import { Tarefa } from '../models/Tarefa';

export interface TarefaContextType {
  tarefas: Tarefa[];
  addTarefa(title: string): void;
  removeTarefa(tarefa: Tarefa): void;
  toggle(tarefa: Tarefa): void;
}