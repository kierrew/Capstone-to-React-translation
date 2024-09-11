import React from "react";
import { useRoutes } from "react-router-dom";
import AccountsScreen from "../Screens/Accounts/AccountsScreen";
import BudgetTemplatesScreen from "../Screens/BudgetTemplates/BudgetTemplatesScreen";
import CurrencyExchangeScreen from "../Screens/CurrencyExchange/CurrencyExchangeScreen";
import DebtDetailScreen from "../Screens/DebtPages/DebtDetail";
import DebtPayoffScreen from "../Screens/DebtPages/DebtPayoffScreen";
import DebtPageScreen from "../Screens/DebtPages/Debts";
import HomeScreen from "../Screens/LandingScreens/HomeScreen";
import SignInScreen from "../Screens/LandingScreens/signin_screen";
import SignUpScreen from "../Screens/LandingScreens/signup_screen";
import PlansScreen from "../Screens/Plans/PlansScreen";
import MyProfileScreen from "../Screens/Profiles/MyProfileScreen";
import UserListScreen from "../Screens/Profiles/UserListScreen";
import SavingsScreen from "../Screens/Savings/SavingsScreen";
import ToolsScreen from "../Screens/Tools/ToolsScreen";
import TransactionsScreen from "../Screens/Transactions/TransactionsScreen";
import WalletScreen from "../Screens/Wallet/WalletScreen";
import ProtectedRoutes from "./ProtectedRoutes";

const MyRoutes = () => {
  const routes = [
    { path: "/", element: <SignInScreen /> },
    { path: "signup", element: <SignUpScreen /> },
    {
      path: "home",
      element: (
        <ProtectedRoutes>
          <HomeScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/debts",
      element: (
        <ProtectedRoutes>
          <DebtPageScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoutes>
          <TransactionsScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/savings",
      element: (
        <ProtectedRoutes>
          <SavingsScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/templates",
      element: (
        <ProtectedRoutes>
          <BudgetTemplatesScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/accounts",
      element: (
        <ProtectedRoutes>
          <AccountsScreen />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/tools",
      element: (
        <ProtectedRoutes>
          <ToolsScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/plans",
      element: (
        <ProtectedRoutes>
          <PlansScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoutes>
          <MyProfileScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/users",
      element: (
        <ProtectedRoutes>
          <UserListScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/wallet",
      element: (
        <ProtectedRoutes>
          <WalletScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/exchange",
      element: (
        <ProtectedRoutes>
          <CurrencyExchangeScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/debtDetail/:debtTitle/:debtInterest/:debtBalance/:debtCategory/:debtID/:debtOriginal/:keyCode",
      element: (
        <ProtectedRoutes>
          <DebtDetailScreen />,
        </ProtectedRoutes>
      ),
    },
    {
      path: "/debtPayoff/:debtTitle/:debtInterest/:debtBalance/:debtOriginal/:debtCategory",
      element: (
        <ProtectedRoutes>
          <DebtPayoffScreen />,
        </ProtectedRoutes>
      ),
    },
  ];

  const element = useRoutes(routes);
  return element;
};

export default MyRoutes;
