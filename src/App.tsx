import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <main className="flex justify-center items-center bg-purple-500 h-screen">
      <div className="bg-purple-950 w-11/12 md:w-8/12 flex flex-col justify-center items-center gap-4 rounded">
        <Header />

        <Form />

        <ToDoList description="Fazer o front-end" priority="Alta" />
        <ToDoList description="Fazer o front-end" priority="Alta" />
      </div>
    </main>
  );
}

export default App;
