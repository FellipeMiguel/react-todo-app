import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const getAllToDo = (setToDo: any) => {
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
  axios.post(`${baseUrl}/save`, { description, priority }).then((data) => {
    console.log(data);
    setDescription('');
    setPriority('');
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo };
