
// library
import { UserIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import axiosConfig from "../axios/axiosConfig";
import { toast } from "react-toastify";
import { storeData } from "../helpers";
import { useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "../helpers/validation";

export default function Login() {
	const {
		register,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate()


	const handleNavCLick = () => {
		navigate('/register');
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		var data = new FormData(event.target);
		let formObject = Object.fromEntries(data.entries());

		// user login
		try {
			const response = await axiosConfig.post('/login', formObject);
			if (response.status === 200) {
				console.log("data", response.data);
				storeData('user', response.data.user);
				storeData('token', response.data.token);
				toast.success(`Welcome User ${response.data.user.email}`)
				return navigate('/', { state: { user: response.data.user } });
			}

			toast.error(`Login Failed ${response.data}`)

		} catch (e) {
			toast.error(`Login fail - ${e?.response?.data?.error}`)
		}
	};

	return (
		<div className="intro">
			<div>
				<h1>
					<span className="accent">Login</span>	 Now
				</h1>
				<p>
					Welcome to the modern <span className="accent"> ToDo </span> app
				</p>
				<Form
					method="post"
					onSubmit={handleLogin}
				>
					<div className="info-input">
						<input
							type="text"
							name="email"
							required
							placeholder="example@test.com"
							aria-label="Your email"
							autoComplete="given-email"
							{...emailValidation(register)}
						/>
						{errors.email && <p>{errors.email.message || "Email is required"}</p>}
					</div>
					<div className="info-input">
						<input
							type="password"
							name="password"
							required
							placeholder="******"
							aria-label="Password"
							autoComplete="current-password"
							{...passwordValidation(register)}
						/>
						{errors.password && <p>{errors.password.message || "Password is required"}</p>}

					</div>
					<button type="submit" className="btn btn--dark">
						<span>Login</span>
						<UserIcon width={20} />
					</button>
				</Form>
				<p>
					Don't have an account <span className="accent" style={{ cursor: "pointer" }} onClick={handleNavCLick}>  Register </span>  Now
				</p>
			</div>
		</div>
	)
}
