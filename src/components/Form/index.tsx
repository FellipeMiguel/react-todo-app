import React from 'react';

const Form = () => {
  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log('hi');
  };

  return (
    <form onSubmit={submitHandler} className="mb-8 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Task
        </label>
        <input
          type="text"
          placeholder="What is the task today?"
          className="flex bg-transparent border border-purple-500 p-2 w-3/4"
        />
        <label className="text-white text-xs md:text-base justify-self-start w-3/4">
          Priority
        </label>
        <input
          type="text"
          placeholder="What is the importance?"
          className="flex bg-transparent border border-purple-500 p-2 w-3/4"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white text-xs md:text-base rounded p-2 md:p-3 lg:p-4"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
