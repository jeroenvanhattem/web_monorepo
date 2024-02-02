import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers";

// Load state from localStorage
const loadState = () => {
	try {
		const serializedState = localStorage.getItem("reduxState");
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

// Save state to localStorage
const saveState = (state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("reduxState", serializedState);
	} catch {
		// ignore write errors
	}
};

const persistedState = loadState();

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	preloadedState: persistedState,
});

store.subscribe(() => {
	saveState({
		auth: store.getState().auth,
	});
});

export const authActions = authSlice.actions;

export { store };
