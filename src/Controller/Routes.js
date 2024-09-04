import React from 'react';
import { Route, Routes } from 'react-router';
import ProtectedRoutes from '../Controller/ProtectedRoutes';
import AccountsScreen from '../Screens/Accounts/AccountsScreen';
import BudgetTemplatesScreen from '../Screens/BudgetTemplates/BudgetTemplatesScreen';
import CurrencyExchangeScreen from '../Screens/CurrencyExchange/CurrencyExchangeScreen';
import AddDebtScreen from '../Screens/DebtPages/addDebt';
import DebtDetailScreen from '../Screens/DebtPages/DebtDetail';
import DebtPayoffScreen from '../Screens/DebtPages/DebtPayoffScreen';
import DebtPageScreen from '../Screens/DebtPages/Debts';
import HomeScreen from '../Screens/LandingScreens/HomeScreen';
import SignInScreen from '../Screens/LandingScreens/signin_screen';
import SignUpScreen from '../Screens/LandingScreens/signup_screen';
import PlansScreen from '../Screens/Plans/PlansScreen';
import MyProfileScreen from '../Screens/Profiles/MyProfileScreen';
import UserListScreen from '../Screens/Profiles/UserListScreen';
import SavingsScreen from '../Screens/Savings/SavingsScreen';
import ToolsScreen from '../Screens/Tools/ToolsScreen';
import TransactionsScreen from '../Screens/Transactions/TransactionsScreen';
import WalletScreen from '../Screens/Wallet/WalletScreen';


const MyRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<SignInScreen />} />
			<Route path='signup' element={<SignUpScreen />} />
			<Route path='home' element={
				<ProtectedRoutes>
					<HomeScreen />
				</ProtectedRoutes>
			} />
			<Route path='debts' element={
				<ProtectedRoutes>
					<DebtPageScreen />
				</ProtectedRoutes>
			} />
			<Route path='transactions' element={
				<ProtectedRoutes>
					<TransactionsScreen />
				</ProtectedRoutes>
			} />
			<Route path='savings' element={
				<ProtectedRoutes>
					<SavingsScreen />
				</ProtectedRoutes>
			} />
			<Route path='templates' element={
				<ProtectedRoutes>
					<BudgetTemplatesScreen />
				</ProtectedRoutes>
			} />
			<Route path='accounts' element={
				<ProtectedRoutes>
					<AccountsScreen />
				</ProtectedRoutes>
			} />
			<Route path='tools' element={
				<ProtectedRoutes>
					<ToolsScreen />
				</ProtectedRoutes>
			} />
			<Route path='plans' element={
				<ProtectedRoutes>
					<PlansScreen />
				</ProtectedRoutes>
			} />
			<Route path='profile' element={
				<ProtectedRoutes>
					<MyProfileScreen />
				</ProtectedRoutes>
			} />
			<Route path='users' element={
				<ProtectedRoutes>
					<UserListScreen />
				</ProtectedRoutes>
			} />
			<Route path='wallet' element={
				<ProtectedRoutes>
					<WalletScreen />
				</ProtectedRoutes>
			} />
			<Route path='exchange' element={
				<ProtectedRoutes>
					<CurrencyExchangeScreen />
				</ProtectedRoutes>
			} />
			<Route path='/addDebt/:keyCode' element={
				<ProtectedRoutes>
					<AddDebtScreen />
				</ProtectedRoutes>
			} />
			<Route path='/debtDetail/:debtTitle/:debtInterest/:debtBalance/:debtCategory/:debtID/:debtOriginal/:keyCode' element={
				<ProtectedRoutes>
					<DebtDetailScreen />
				</ProtectedRoutes>
			} />
			<Route path='/debtPayoff/:debtTitle/:debtInterest/:debtBalance/:debtOriginal/:debtCategory' element={
				<ProtectedRoutes>
					<DebtPayoffScreen />
				</ProtectedRoutes>
			} />
		</Routes>
	)
}

export default MyRoutes
