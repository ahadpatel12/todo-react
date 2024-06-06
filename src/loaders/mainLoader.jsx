import { fetchData } from "../helpers";

export function mainLoader() {
  const user = fetchData('user');
  console.log("User in main", user)
  return { user };
}