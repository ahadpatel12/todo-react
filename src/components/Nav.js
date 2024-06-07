// assts
import { Form, NavLink } from "react-router-dom"
import { fetchData } from "../helpers";
import { TrashIcon } from "@heroicons/react/16/solid";


export default function Nav() {

  const user = fetchData('user')
  console.log("user from nav", user)
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <span>Todo</span>
      </NavLink>
      {
        user && (
          <Form
            method="post"
            action="/logout"
            onSubmit={(event) => {
              if (!window.confirm("Are you sure to Logout?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Logout</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        )
      }
    </nav>
  )
}
