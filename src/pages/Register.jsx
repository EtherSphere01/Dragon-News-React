import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="hero flex min-h-screen justify-center items-center ">
        <div className=" bg-none w-[30%]">
          <div className="text-center py-5">
            <h1 className="text-2xl font-bold">Register your account</h1>
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <form className="card-body w-full" onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter your name"
                  name="name"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Give your photo URL"
                  name="photoURL"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter your Email"
                  name="email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Enter your Password"
                  name="password"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>

                <p className="pt-2 text-center text-accent font-semibold">
                  Already have an account?{" "}
                  <Link
                    to="/auth/Login"
                    className="text-secondary font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
