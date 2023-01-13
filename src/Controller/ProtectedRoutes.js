import React, { Children } from 'react'
import { UserAuth } from './Auth';
import { Navigate, useNavigate } from "react-router";

const ProtectedRoutes = ({children}) => {
	const {user} = UserAuth();

	if(!user) {
		return <Navigate to='/' />
	}
  return children;
}

export default ProtectedRoutes