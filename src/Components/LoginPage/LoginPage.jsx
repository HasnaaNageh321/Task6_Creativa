import React from "react";
import { useState } from "react";
import "./LoginPageStyle.css";

function LoginPage() {
  return (
    <>
      <div className="LoginPageStyle">
        <div className="container">
          <div className="card">
            <h2>Log in</h2>
            <p>
              Don not have an account <a href="#">Sign up</a>
            </p>
            <button className="btn btn-primary">Log in with facebook</button>
            <button className="btn btn-primary"> Log in with Goagle</button>
            <span>or</span>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleInputEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="form-control"
                  id="exampleInputPassword"
                  required
                />
              </div>
            </form>
            <p>forget your password</p>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

{
  /* <div className="mb-3">
  <label htmlFor="exampleInputUserName" className="form-label">
    User Name
  </label>
  <input
    type="text"
    className="form-control"
    id="exampleInputUserName"
    required
  />
</div> */
}
