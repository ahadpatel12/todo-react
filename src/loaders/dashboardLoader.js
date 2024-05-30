import { fetchData } from "../helpers";
import useFetch from "../hooks/useFetch";

export function dashboardLoader() {

  const userName = fetchData('userName')
  return { userName };
}