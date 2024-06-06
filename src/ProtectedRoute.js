import { Navigate, useLocation } from "react-router-dom"
import { fetchData } from './helpers';

export default function ProtectedRoute({ component }) {
  const token = fetchData('token');
  let location = useLocation();

  console.log('token:', !token)

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return component

};
