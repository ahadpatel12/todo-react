import { Form } from "react-router-dom"

// library
import { UserIcon } from "@heroicons/react/24/solid"
// assets
// import illustration from "../assets/illustration.jpg"

export default function Login({ toggleValue }) {
	return (
		<div className="intro">
			<div>
				<h1>
					<span className="accent">Login</span>	 Now
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
					<input type="hidden" name="_action" value="login" />
					<button type="submit" className="btn btn--dark">
						<span>Login</span>
						<UserIcon width={20} />
					</button>
				</Form>
				<p>
					Don't have an account <span className="accent" style={{ cursor: "pointer" }} onClick={toggleValue}>  Register </span>  Now
				</p>
			</div>
			{/* <img src={} alt="Person with money" width={600} /> */}
		</div>
	)
}
