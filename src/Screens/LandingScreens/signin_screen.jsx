import { Button, Input } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Controller/Auth";
import "../layout.css";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("email", email);
    console.log("password", password);
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      alert("Username and/or Password is invalid. \n Please try again.");
    }
  };

  const signUp = () => {
    navigate("/signup");
  };

  // <form onSubmit={handleSubmit}>
  return (
    <div className="App">
      <body className="App-body">
        <p>Welcome to the Budget App please sign in</p>
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
        <p>
          <Button
            onPress={handleSubmit}
            className="ml-12 bg-green-400 text-white"
          >
            Sign in
          </Button>
        </p>
        <p>
          <Button onPress={signUp} className="ml-12 bg-green-400 text-white">
            New User? Click here.
          </Button>
        </p>
      </body>
    </div>
  );
}

export default SignInScreen;
