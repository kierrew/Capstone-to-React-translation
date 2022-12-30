import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignInScreen from './Viewscreen/View/signin_screen';
import SignUpScreen from './Viewscreen/View/signup_screen';
import DebtPageScreen from './Viewscreen/View/debtPage_Screen';
import HomeScreen from './Viewscreen/View/home_screen';
import { AuthContextProvider } from './Controller/Auth';
import ProtectedRoutes from './Controller/ProtectedRoutes';
import TransactionsScreen from './Viewscreen/View/TransactionsScreen';
import SavingsScreen from './Viewscreen/View/SavingsScreen';
import BudgetTemplatesScreen from './Viewscreen/View/BudgetTemplatesScreen';
import AccountsScreen from './Viewscreen/View/AccountsScreen';
import ToolsScreen from './Viewscreen/View/ToolsScreen';
import PlansScreen from './Viewscreen/View/PlansScreen';
import MyProfileScreen from './Viewscreen/View/MyProfileScreen';
import UserListScreen from './Viewscreen/View/UserListScreen';
import WalletScreen from './Viewscreen/View/WalletScreen';
import CurrencyExchangeScreen from './Viewscreen/View/CurrencyExchangeScreen';


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
          <DebtPageScreen />
        </ProtectedRoutes>
      }/>
      <Route path='transactions' element={
        <ProtectedRoutes>
          <TransactionsScreen />
        </ProtectedRoutes>
      }/>
      <Route path='savings' element={
        <ProtectedRoutes>
          <SavingsScreen />
        </ProtectedRoutes>
      }/>
      <Route path='templates' element={
        <ProtectedRoutes>
          <BudgetTemplatesScreen />
        </ProtectedRoutes>
      }/>
      <Route path='acounts' element={
        <ProtectedRoutes>
          <AccountsScreen />
        </ProtectedRoutes>
      }/>
      <Route path='tools' element={
        <ProtectedRoutes>
          <ToolsScreen />
        </ProtectedRoutes>
      }/>
      <Route path='plans' element={
        <ProtectedRoutes>
          <PlansScreen />
        </ProtectedRoutes>
      }/>
      <Route path='profile' element={
        <ProtectedRoutes>
          <MyProfileScreen />
        </ProtectedRoutes>
      }/>
      <Route path='users' element={
        <ProtectedRoutes>
          <UserListScreen />
        </ProtectedRoutes>
      }/>
      <Route path='wallet' element={
        <ProtectedRoutes>
          <WalletScreen />
        </ProtectedRoutes>
      }/>
      <Route path='exchange' element={
        <ProtectedRoutes>
          <CurrencyExchangeScreen />
        </ProtectedRoutes>
      }/>
    </Routes>
    </AuthContextProvider>
  );
}

export default App;
