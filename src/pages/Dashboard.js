// helper functions
// import { useLoaderData } from "react-router-dom";
// import Authentication from "./Authentication";

import { AddTodoForm } from "../components/AddTodoForm";
import { Todo } from "../components/Todo";

export default function Dashborard() {

  return (
    <div className="todo-container">
      <AddTodoForm />
      <h2>All Todos</h2>
      <Todo />
    </div>
  )
}
