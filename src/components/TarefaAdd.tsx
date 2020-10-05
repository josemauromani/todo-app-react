import React, { useContext } from 'react';
import { TarefaContext } from '../contexts/TarefaContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TarefaContextType } from '../contexts/TarefaContextType';

const schema = yup.object().shape({
  title: yup.string().required('Tarefa inválida'),
});

interface TarefaAddForm {
  title: string
}

const TarefaAdd = () => {

  const { addTarefa } = useContext<TarefaContextType>(TarefaContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: TarefaAddForm, e: any) => {
    addTarefa(data.title);
    e.target.reset();
    window.location.href = '/';
  }

  return (
    <form onSubmit={handleSubmit<TarefaAddForm>(onSubmit)}>
      <h4>Nova tarefa</h4>
      <div className="uk-margin uk-width-1-1">
        <input type="text" name="title" id="title" placeholder="Nova tarefa" className="uk-input" ref={register} />
        <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
      </div>
      <div className="uk-width-1-1">
        <button type="submit" className="uk-button uk-button-primary">Salvar</button>
      </div>
    </form>
  );

}

export default TarefaAdd;