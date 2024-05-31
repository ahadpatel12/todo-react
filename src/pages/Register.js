import { Form, useNavigate } from "react-router-dom"
// library
import { UserPlusIcon } from "@heroicons/react/24/solid"

export default function Register() {
  const navigate = useNavigate()

  const handleNavCLick = () => {
    navigate('/login');
  };

  return (
    <div className="intro">
      <div>
        <h1>
          <span className="accent">Register</span>	 Now
        </h1>
        <p>
          Welcome to the modern <span className="accent"> ToDo </span> app
        </p>
        <Form method="post">
          <input
            type="text"
            name="email"
            required
            placeholder="example@test.com"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input
            type={
              "password"
            }
            name="password"
            required
            placeholder="******"
            aria-label="Password"
            autoComplete="current-password"
          />
          <input
            type="password"
            name="confirm-password"
            required
            placeholder="******"
            aria-label="Confirm Password"
          />
          <input type="hidden" name="_action" value="register" />
          <button type="submit" className="btn btn--dark">
            <span>Register</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
        <p>
          Already have an account <span className="accent" style={{ cursor: "pointer" }} onClick={handleNavCLick}> Login </span> Now
        </p>
      </div>
    </div>
  )
}
