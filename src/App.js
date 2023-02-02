import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import { AuthContextProvider } from './Controller/Auth';
import MyRoutes from './Controller/Routes';


function App() {
  return (
    <AuthContextProvider>
    <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
