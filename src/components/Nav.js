// assts
import { Form, NavLink } from "react-router-dom"
// import logomark from "../assets/logomark.svg"
// import { TrashIcon } from "@heroicons/react/16/solid";


export default function Nav({ user }) {
  console.log("user", user)
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        {/* <img src={logomark} alt="" height={30} /> */}
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
              {/* <TrashIcon width={20} /> */}
            </button>
          </Form>
        )
      }
    </nav>
  )
}
