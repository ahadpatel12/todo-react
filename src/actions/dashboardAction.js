import { toast } from "react-toastify";
import axiosConfig from "../axios/axiosConfig";


export async function dashboardAction({ request }) {


  const requestData = await request.formData();
  const { _action, ...values } = Object.fromEntries(requestData);
  if (_action === "createTodo") {
    try {
      const data = {
        title: values.title,
        description: values.description,
        timer: ((parseInt(values.minutes) * 60) + parseInt(values.seconds))
      }
      console.log(data)

      const response = await axiosConfig.post('/todo', data)
      console.log(response.data);
      return toast.success(response.data.message || "Created Todo success");
    } catch (e) {
      return toast.error(e.response.error)
    }
  }

  if (_action === "deleteTodo") {
    console.log("todo id = ", values.id)
    try {
      await axiosConfig.delete(`todo/${values.id}`);
      return toast.success(`successfully deleted todo with id ${values.id}`)

    } catch (e) {
      return toast.error(e.response.error)

    }

  }


  return toast.success

}