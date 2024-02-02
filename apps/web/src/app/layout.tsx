import "ui/style/main.scss";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "600"],
});

export default function RootLayout({
	children,
}: {
	children: React.JSX.Element;
}) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<div className="page">{children}</div>
			</body>
		</html>
	);
}
