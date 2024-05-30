// helper functions
import { useLoaderData } from "react-router-dom";
import Authentication from "./Authentication";

export default function Dashborard() {
  const { userName } = useLoaderData()
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
          <div className="grid-sm">
          </div>
        </div>
      ) : <Authentication />}
    </>
  )
}
