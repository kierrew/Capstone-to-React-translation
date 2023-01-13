import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
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
import MyRoutes from './Controller/Routes';


function App() {
  return (
    <AuthContextProvider>
    <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
