import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Form from './components/Form';

import { getAllToDo } from './utils/ApiHandler';

function App() {
  const [toDo, setToDo]: any = useState([]);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

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
          />
        ))}
      </div>
    </main>
  );
}

export default App;
