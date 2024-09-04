import React from 'react';
import './App.css';
import { AuthContextProvider } from './Controller/Auth';
import MyRoutes from './Controller/Routes';

function App() {
  return (
    <AuthContextProvider>
    <MyRoutes />
    </AuthContextProvider>
  );
}

export default App
