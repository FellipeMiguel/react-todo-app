import React, { useState } from 'react';
import { addToDo, updateToDo } from '../../utils/ApiHandler';

const Form = () => {
  const [toDo, setToDo]: any = useState([]);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isUpdating, setIsUpdating]: any = useState(false);
  const [toDoId, setToDoId] = useState('');

  return (
    <form className="mb-8 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Tarefas
        </label>
        <input
          type="text"
          placeholder="Descreve a tarefa..."
          className="text-white flex bg-transparent border border-purple-500 p-2 w-3/4"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Prioridade
        </label>
        <input
          type="text"
          placeholder="Qual a prioridade dela?"
          className="text-white flex bg-transparent border border-purple-500 p-2 w-3/4"
          value={priority}
          onChange={(e: any) => setPriority(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white text-xs md:text-base rounded p-2 md:p-3 lg:p-4"
          onClick={
            isUpdating
              ? () =>
                  updateToDo(
                    toDoId,
                    description,
                    setDescription,
                    priority,
                    setPriority,
                    setToDo,
                    setIsUpdating,
                  )
              : () =>
                  addToDo(
                    description,
                    setDescription,
                    priority,
                    setPriority,
                    setToDo,
                  )
          }
        >
          {isUpdating ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>
    </form>
  );
};

export default Form;
