// import { Form } from "react-router-dom"

// library
import { UserIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
// import usePost from "../hooks/usePost";
// import { useCallback } from "react";
// assets
// import illustration from "../assets/illustration.jpg"

export default function Login() {
	const navigate = useNavigate()
	const fetcher = useFetcher()
	const isSubmitting = fetcher.state === "submitting";

	const formRef = useRef();

	useEffect(() => {
		if (!isSubmitting) {
			formRef.current.reset()
		}
	}, [isSubmitting])

	const handleNavCLick = () => {
		navigate('/register');
	}

	return (
		<div className="intro">
			<div>
				<h1>
					<span className="accent">Login</span>	 Now
				</h1>
				<p>
					Welcome to the modern <span className="accent"> ToDo </span> app
				</p>
				<fetcher.Form
					ref={formRef}
					method="post"
					target="/"
				>
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
					{/* <input type="hidden" name="_action" value="login" /> */}
					<button type="submit" className="btn btn--dark">
						<span>Login</span>
						<UserIcon width={20} />
					</button>
				</fetcher.Form>
				<p>
					Don't have an account <span className="accent" style={{ cursor: "pointer" }} onClick={handleNavCLick}>  Register </span>  Now
				</p>
			</div>
		</div>
	)
}
