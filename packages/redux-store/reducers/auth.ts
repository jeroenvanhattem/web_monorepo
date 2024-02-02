/* eslint-disable eslint-comments/require-description */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";
import type { Slice } from "@reduxjs/toolkit";

export const authInitialState = {
	user: null,
	credentials: null,
	profile: null,
};

export const authSlice: Slice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		hydrate: (state, action) => {
			state.user = action.payload.user;
			state.credentials = action.payload.credentials;
			state.profile = action.payload.profile;
			// return action.payload;
		},
		login(state, action) {
			localStorage.setItem("auth/user", JSON.stringify(action.payload));
			state.user = action.payload.user;
			state.credentials = action.payload.credentials;
			state.profile = action.payload.profile;
		},
		logout(state) {
			localStorage.setItem("auth/user", JSON.stringify(null));
			state.user = null;
			state.credentials = null;
			state.profile = null;
		},
	},
});

export const { login, logout, hydrate } = authSlice.actions;
