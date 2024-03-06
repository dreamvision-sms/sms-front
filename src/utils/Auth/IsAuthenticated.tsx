/** @format */

import React, { ReactNode } from "react";
import { useAppSelector } from "../../store/hooks";
import { Navigate } from "react-router-dom";

interface Props {
	children: ReactNode;
}
const IsAuthenticated: React.FC<Props> = ({ children }) => {
	const user = useAppSelector((state) => state.AuthSlice.isLogin);
	console.log(user);

	return <div>{user ? children : <Navigate to={"/"} />}</div>;
};

export default IsAuthenticated;
