import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const getAllToDo = (setToDo: any): void => {
  axios.get(baseUrl).then(({ data }) => {
    console.log('data ---> ' + data);
    setToDo(data);
  });
};

const addToDo = (
  description: string,
  setDescription: any,
  priority: string,
  setPriority: any,
  setToDo: any,
) => {
  axios
    .post(`${baseUrl}/save`, { description, priority })
    .then((data) => {
      console.log(data);
      setDescription('');
      setPriority('');
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateToDo = (
  toDoId: string,
  description: string,
  setDescription: any,
  priority: string,
  setPriority: any,
  setToDo: any,
  setIsUpdating: any,
) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, description, priority })
    .then((data) => {
      setDescription('');
      setPriority('');
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteToDo = (_id: any, setToDo: any) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
