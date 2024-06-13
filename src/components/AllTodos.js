import { useEffect, useState } from "react";
import { Todo } from "./Todo";
import axiosConfig from "../axios/axiosConfig";
import useActionCable from "../hooks/useActionCable";
import useChannel from "../hooks/useChannel";
import { fetchData } from "../helpers";

export default function AllTodos() {
  const [todos, setTodos] = useState([])
  const { actionCable } = useActionCable('ws://localhost:3000/cable')
  const user = fetchData('user')
  const { subscribe, unsubscribe, send } = useChannel(actionCable)

  function getTodoEventChanges() {
    subscribe({ channel: 'TodoChannel', id: user.id }, {
      received: (data) => {
        console.log("Received Data", data);
        switch (data.event) {
          case 'list':
            setTodos(data.todos);
            break;
          case 'add':
            setTodos(oldTodo => [
              ...oldTodo,
              data.todo
            ])
            break;
          case 'edit':
            todos.map(todo => {
              if (todo.id === data.id) {
                return data;
              }
              return todo;
            })
            break;
          case "delete":
            setTodos(todoList =>
              todoList.filter(todo => todo.id !== Number(data.id)))
            break;
          default:
            break
        }
      },
      connected: () => {
        console.log("Todo channel connected")
      }
    })
  }

  useEffect(() => {
    getTodoEventChanges();
  }, []);

  return (
    <div>
      <h2>All Todos</h2>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}