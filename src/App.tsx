import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Form from './components/Form';

import { getAllToDo, deleteToDo } from './utils/ApiHandler';

function App() {
  const [toDo, setToDo]: any = useState([]);
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isUpdating, setIsUpdating]: any = useState('');
  const [toDoId, setToDoId] = useState('');

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateToDo = (_id: string, description: string, priority: string) => {
    setIsUpdating(true);
    setDescription(description);
    setPriority(priority);
    console.log('here');
  };

  return (
    <main className="flex justify-center items-center bg-purple-500 min-h-screen">
      <div className="bg-purple-950 w-11/12 md:w-8/12 flex flex-col justify-center items-center gap-4 rounded my-8">
        <Header />

        <Form />

        {toDo.map((item: any) => (
          <ToDoList
            key={item.id}
            description={item.description}
            priority={item.priority}
            updateToDo={() =>
              updateToDo(item._id, item.description, item.priority)
            }
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
