"use client";
import { Providers } from "@/utils/providers";
import "ui/style/main.scss";
import { Open_Sans } from "next/font/google";
import { useEffect } from "react";
import { getReduxStateFromLocalstorage } from "redux-store/actions";
import { store } from "redux-store/store";
import { authSlice } from "redux-store/reducers";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.JSX.Element;
}) {
	useEffect(() => {
		const reduxState = getReduxStateFromLocalstorage();
		if (reduxState) {
			store.dispatch(authSlice.actions.hydrate(reduxState.auth));
		}
	}, []);
	return (
		<html lang="en">
			<Providers>
				<body className={openSans.className}>{children}</body>
			</Providers>
		</html>
	);
}
