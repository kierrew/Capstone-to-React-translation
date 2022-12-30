import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignInScreen from './Viewscreen/View/signin_screen';
import SignUpScreen from './Viewscreen/View/signup_screen';
import debtPageScreen from './Viewscreen/View/debtPage_Screen';
import HomeScreen from './Viewscreen/View/home_screen';
import { AuthContextProvider } from './Controller/Auth';
import ProtectedRoutes from './Controller/ProtectedRoutes';


function App() {
  return (
    <AuthContextProvider>
    <Routes>
      <Route path='/' element={<SignInScreen />}/>
      <Route path='signup' element={<SignUpScreen />}/>
      <Route path='home' element={
        <ProtectedRoutes>
          <HomeScreen />
        </ProtectedRoutes>
      }/>
      <Route path='debts' element={
        <ProtectedRoutes>
          <debtPageScreen />
        </ProtectedRoutes>
      }/>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
