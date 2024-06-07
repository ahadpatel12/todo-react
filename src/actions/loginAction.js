import { toast } from "react-toastify";
import axiosConfig from "../axios/axiosConfig";


export async function loginAction({ request }) {
  // await waait();
  console.log(request)

  const requestData = await request.formData();
  console.log("Request Data", requestData)
  const data = Object.fromEntries(requestData);


  console.log("Data ", data)
  // new user submission
  try {
    // const response = await axiosConfig.post('/login', data);
    // console.log("data", response.data);

    // localStorage.setItem("token", JSON.stringify(response.data.token))
    // localStorage.setItem("user", JSON.stringify(response.data.user))

    // return "data";
    // localStorage.setItem("userName", JSON.stringify(values.userName))
    // return toast.success(`Welcome ${values.userName}`)
    return toast.success(`Welcome User`)

  } catch (e) {
    throw new Error("There was a problem logging your account");
  }

}