import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
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
            <h1 className="text-2xl font-bold">Login your account</h1>
          </div>
          <div className="card bg-base-100 w-full  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
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
                  className="input  w-full"
                  placeholder="Enter your Password"
                  name="password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="pt-2 text-center text-accent font-semibold">
                  Don't have an account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-secondary font-semibold"
                  >
                    {" "}
                    Register
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

export default Login;
