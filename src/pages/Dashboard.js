// helper functions
// import { useLoaderData } from "react-router-dom";
// import Authentication from "./Authentication";

import { AddTodoForm } from "../components/AddTodoForm";
import AllTodos from "../components/AllTodos";

export default function Dashborard() {

  return (
    <div className="todo-container">
      <AddTodoForm />
      <AllTodos />
    </div>
  )
}
