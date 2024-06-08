import { Navigate, useLocation } from "react-router-dom";
import { fetchData } from "./helpers"

export default function PublicRoute({ component }) {
  const token = fetchData('token');
  const location = useLocation();

  console.log('location:', location)

  if (token) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return component;
}