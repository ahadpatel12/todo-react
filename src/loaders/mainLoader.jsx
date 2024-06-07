import { fetchData } from "../helpers";

export function mainLoader() {
  const user = fetchData('user');
  const token = fetchData('token');
  return { user, token };
}