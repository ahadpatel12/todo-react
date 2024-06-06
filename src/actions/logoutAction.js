import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";


export default function logoutAction() {

  deleteItem({ key: 'user' });
  deleteItem({ key: 'token' });
  toast.success("Logout Success!")

  return redirect('/login')
}