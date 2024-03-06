/** @format */

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_API_URL } from "../../utils/env";

// Define a service using a base URL andzfveazmk expected endpoints
export const AuthenticationApi = createApi({
	reducerPath: "AuthenticationApi",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),
	endpoints: (builder) => ({
		LoginUser: builder.mutation({
			query: (user: { username: string; password: string }) => {
				return {
					url: "auth/login/",
					method: "POST",
					body: user,
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation } = AuthenticationApi;
