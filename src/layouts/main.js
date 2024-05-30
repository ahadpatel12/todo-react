import { Outlet, useLoaderData } from "react-router-dom";

// nav components
import Nav from "../components/Nav";


export default function Main() {
  const { userName } = useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
