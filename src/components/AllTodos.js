import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axiosConfig from "../axios/axiosConfig";

export default function AllTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    new Promise((resolve, reject) => {

      const result = axiosConfig.get('/todos');

      if (result) {
        resolve(result);
      } else {
        reject('Failure');
      }
    }).then((res) => {
      setTodos(res.data)
    });
  }, [])

  return (
    <div>
      <h2>All Todos</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}