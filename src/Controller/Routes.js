import React from 'react'
import { Route, Routes } from 'react-router';
import SignInScreen from '../Viewscreen/signin_screen';
import SignUpScreen from '../Viewscreen/signup_screen';
import DebtPageScreen from '../Viewscreen/debtPage_Screen';
import HomeScreen from '../Viewscreen/home_screen';
import ProtectedRoutes from '../Controller/ProtectedRoutes';
import TransactionsScreen from '../Viewscreen/TransactionsScreen';
import SavingsScreen from '../Viewscreen/SavingsScreen';
import BudgetTemplatesScreen from '../Viewscreen/BudgetTemplatesScreen';
import AccountsScreen from '../Viewscreen/AccountsScreen';
import ToolsScreen from '../Viewscreen/ToolsScreen';
import PlansScreen from '../Viewscreen/PlansScreen';
import MyProfileScreen from '../Viewscreen/MyProfileScreen';
import UserListScreen from '../Viewscreen/UserListScreen';
import WalletScreen from '../Viewscreen/WalletScreen';
import CurrencyExchangeScreen from '../Viewscreen/CurrencyExchangeScreen';
import AddDebtScreen from '../Viewscreen/addDebtScreen';



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
			<Route path='addDebt' element ={
				<ProtectedRoutes>
					<AddDebtScreen />
				</ProtectedRoutes>
			} />
		</Routes>
	)
}

export default MyRoutes