import { useNavigate } from "react-router-dom"
// library
import { UserPlusIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { confirmPasswordValidation, emailValidation, passwordValidation } from "../helpers/validation";
import { storeData } from "../helpers";
import axiosConfig from "../axios/axiosConfig";
import { toast } from "react-toastify";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate()

  const handleNavCLick = () => {
    navigate('/login');
  };

  const handleOnSubmit = useCallback(async (event) => {
    const { confirm_password, ...formObject } = event;
    delete event.confirm_password;
    console.log("event", event)
    console.log(formObject);

    // user registeration
    try {
      const response = await axiosConfig.post('/register', formObject);
      if (response.status === 201) {
        console.log("data", response.data);
        storeData('user', response.data.user);
        storeData('token', response.data.token);
        toast.success(`Welcome User ${response.data.user.email}`)
        return navigate('/', { state: { user: response.data.user } });
      }
      console.log(response.data)
      toast.error(`Register Failed ${response.data}`)
    } catch (e) {
      toast.error(`register fail - ${e?.response?.data?.error}`)
    }
  }, []);

  return (
    <div className="intro">
      <div>
        <h1>
          <span className="accent">Register</span>	 Now
        </h1>
        <p>
          Welcome to the modern <span className="accent"> ToDo </span> app
        </p>
        <form
          method="post"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="info-input">
            <input
              type="text"
              name="email"
              placeholder="example@test.com"
              aria-label="Your Name"
              autoComplete="new-email"
              {...emailValidation(register)}
            />
            {errors.email && <p> {errors.email.message || "Email is required."} </p>}
          </div>
          <div className="info-input">
            <input
              type="password"
              name="password"
              placeholder="******"
              aria-label="Password"
              autoComplete="new-password"
              {...passwordValidation(register)}
            />
            {errors.password && <p> {errors.password.message || "Password is required."}</p>}
          </div>
          <div className="info-input">
            <input
              type="password"
              name="confirm-password"
              required
              placeholder="******"
              aria-label="Confirm Password"
              autoComplete="new-password"
              {...confirmPasswordValidation(register, watch)}
            />
            {errors.confirm_password && <p>{errors.confirm_password.message || "Confirm Password required"}</p>}
          </div>

          <button type="submit" className="btn btn--dark">
            <span>Register</span>
            <UserPlusIcon width={20} />
          </button>
        </form>
        <p>
          Already have an account <span className="accent" style={{ cursor: "pointer" }} onClick={handleNavCLick}> Login </span> Now
        </p>
      </div>
    </div>
  )
}