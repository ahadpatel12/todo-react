import { fetchData } from "../helpers";
// import useFetch from "../hooks/useFetch";

export function dashboardLoader() {

  const user = fetchData('user')
  const token = fetchData('token')
  return { user,token };
}