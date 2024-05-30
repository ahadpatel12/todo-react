import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useCallback, useState } from "react";
// import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Authentication(props) {
  const [showLogin, setToggleValue] = useState(false);

  const toggleValue = useCallback(() => {
    setToggleValue(!showLogin)
  }, [showLogin])
  return (
    showLogin ? <Login toggleValue={toggleValue} /> : <Register toggleValue={toggleValue} />
    // <div>
    //     <div className="intro">
    //     <h1>
    //       <span className="accent">Login</span>	 Now
    //     </h1>
    //     <p>
    //       Welcome to the modern <span className="accent"> ToDo </span> app
    //     </p>
    //     <Form method="post">
    //       <input
    //         type="text"
    //         name="email"
    //         required
    //         placeholder="example@test.com"
    //         aria-label="Your Name"
    //         autoComplete="given-name"
    //       />
    //       <input
    //         type="password"
    //         name="password"
    //         required
    //         placeholder="******"
    //         aria-label="Password"
    //         autoComplete="current-password"
    //       />
    //       {!isLogin &&
    //         (<input
    //           type="password"
    //           name="confirm-password"
    //           required
    //           placeholder="******"
    //           aria-label="Confirm Password"
    //         />)}
    //       <input type="hidden" name="_action" value={isLogin ? "login" : "register"} />
    //       <button type="submit" className="btn btn--dark">
    //         <span>{isLogin ? 'Login' : 'Register'}</span>
    //         <UserPlusIcon width={20} />
    //       </button>
    //     </Form>
    //     <p>
    //       Don't have an account <button onClick={toggleCallback}>
    //         <span className="accent"> Register </span></button>  Now
    //     </p>
    //   </div>
    //   {/* <img src={} alt="Person with money" width={600} /> */}
    // </div>
  )
}