import React from 'react'
import { Route, Routes } from 'react-router';
import SignInScreen from '../Viewscreen/signin_screen';
import SignUpScreen from '../Viewscreen/signup_screen';
import DebtPageScreen from '../Viewscreen/Debt_Pages/debtPage_Screen';
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
import AddDebtScreen from '../Viewscreen/Debt_Pages/addDebtScreen';
import DebtDetailScreen from '../Viewscreen/Debt_Pages/DebtDetailScreen';
import DebtPayoffScreen from '../Viewscreen/Debt_Pages/DebtPayoffScreen';


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
			<Route path='/addDebt/:keyCode' element ={
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