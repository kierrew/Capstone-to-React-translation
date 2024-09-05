import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./Controller/Auth";
import MyRoutes from "./Controller/Routes";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
