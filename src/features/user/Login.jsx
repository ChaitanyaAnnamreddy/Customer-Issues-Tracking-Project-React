import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLazyAuthenticateQuery } from "../../services/userapi";

function Login() {
  var [loginFn] = useLazyAuthenticateQuery();
  var navigate = useNavigate();
  var loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
      loginFn(values).then((res) => {
        window.localStorage.setItem("user", JSON.stringify(res.data));
        if (res.data.length === 0) {
          alert("Invalid username or password");
        } else {
          navigate("/dashboard");
        }
      });
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit={loginForm.handleSubmit} className="box">
              <h1>Login</h1>
              <p className="text-muted">
                Please enter your login and password!
              </p>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={loginForm.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={loginForm.handleChange}
              />

              <button type="submit" name="" value="Login" href="#">
                Login
              </button>

              <Link className="text-muted" to="/register">
                Don't have an account?
              </Link>
              <p className="text-muted">
                <Link className="text-muted" to="/reset">
                  Forgot password?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
