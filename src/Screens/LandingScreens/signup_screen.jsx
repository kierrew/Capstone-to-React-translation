import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Controller/Auth";
import "../layout.css";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  const signIn = () => {
    navigate("/");
  };

  return (
    <div>
      <header>
        <h1>Sign up</h1>
      </header>
      <body>
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="gap-y-1">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button variant="primary" type="submit" className="m-2">
              Create Account
            </Button>
          </div>
        </form>
        <Button variant="primary" onClick={signIn}>
          Returning user? Sign in.
        </Button>
      </body>
    </div>
  );
};

export default SignUpScreen;
