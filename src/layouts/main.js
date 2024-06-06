import { Outlet, useLoaderData } from "react-router-dom";

// nav components
import Nav from "../components/Nav";


export default function Main() {
  const { user } = useLoaderData()
  return (
    <div className="layout">
      <Nav user={user} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
