import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
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
    <div className="App">
      <body className="App-body">
        <p>Sign up</p>
        <p>
          <Input
            key={"email"}
            name="email"
            type="email"
            placeholder="Email"
            onValueChange={setEmail}
          />
        </p>
        <p>
          <Input
            key={"password"}
            name="password"
            type="password"
            placeholder="Password"
            onValueChange={setPassword}
          />
        </p>
        <p className="mr-10">
          <Button className="ml-12 bg-green-400 text-white">
            Create Account
          </Button>
        </p>
        <Button variant="primary" onPress={signIn}>
          Returning user? Sign in.
        </Button>
      </body>
    </div>
  );
};

export default SignUpScreen;
