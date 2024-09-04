import React, { useState } from "react";
import "./SignupPageStyle.css";
function SignupPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="SignupPage">
      <div className="container">
        <div className="card">
          <h2>Create an account</h2>
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputUserName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUserName"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create an account
            </button>
          </form>
          <p>
            By creating an account, you agree to our{" "}
            <a href="#">terms of use</a> and <a href="#">privacy policy</a>.
          </p>
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
