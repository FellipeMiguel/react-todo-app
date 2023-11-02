import React from 'react';
import { LiaEditSolid, LiaTrashAltSolid } from 'react-icons/lia';

const ToDoList = (props: any) => {
  return (
    <div className="flex items-center justify-between w-3/4 rounded p-4 bg-purple-500 mb-2">
      <div>
        <h2 className="text-sm md:text-xl">{props.description}</h2>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <div className="bg-purple-950 p-1 rounded-lg">
          <p className="text-white text-xs">{props.priority}</p>
        </div>
        <div className="flex items-center">
          <a href="">
            <LiaEditSolid
              className="text-white text-base md:text-xl"
              onClick={props.updateToDo}
            />
          </a>
          <a href="">
            <LiaTrashAltSolid
              className="text-white text-base md:text-xl"
              onClick={props.deleteToDo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
