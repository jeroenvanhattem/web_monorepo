export const getReduxStateFromLocalstorage = () => {
	try {
		const persistedState = localStorage.getItem("reduxState");
		if (persistedState) return JSON.parse(persistedState);
	} catch (e) {
		console.log(e);
	}
};
