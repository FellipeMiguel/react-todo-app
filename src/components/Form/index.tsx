import React, { useState } from 'react';
import { addToDo } from '../../utils/ApiHandler';

const Form = () => {
  const [toDo, setToDo]: any = useState([]);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <form className="mb-8 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Task
        </label>
        <input
          type="text"
          placeholder="What is the task today?"
          className="text-white flex bg-transparent border border-purple-500 p-2 w-3/4"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Priority
        </label>
        <input
          type="text"
          placeholder="What is the importance?"
          className="text-white flex bg-transparent border border-purple-500 p-2 w-3/4"
          value={priority}
          onChange={(e: any) => setPriority(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white text-xs md:text-base rounded p-2 md:p-3 lg:p-4"
          onClick={() =>
            addToDo(description, setDescription, priority, setPriority, setToDo)
          }
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
