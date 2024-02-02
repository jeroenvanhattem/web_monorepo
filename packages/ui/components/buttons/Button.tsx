import "../../style/main.scss";
import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
	id?: string;
	disabled?: boolean;
	size?: "small" | "medium" | "large" | "narrow" | "compact" | "wide";
	inverted?: boolean;
	onPress: () => void;
	style?: any;
	secondary?: boolean;
	tertiary?: boolean;
	children: ReactNode | JSX.Element | string;
}

export const Button = ({
	disabled,
	children,
	onPress,
	size = "small",
	inverted = false,
	secondary = false,
	tertiary = false,
}: unknown & ButtonProps) => {
	return (
		<div
			className={classNames("button--primary", {
				"button--small": size === "small",
				"button--medium": size === "medium",
				"button--large": size === "large",
				"button--narrow": size === "narrow",
				"button--compact": size === "compact",
				"button--wide": size === "wide",
				"button--inverted": inverted,
				"button--secondary": secondary,
				"button--tertiary": tertiary,
				"button--disabled": disabled,
			})}
			onClick={disabled ? () => {} : onPress}
		>
			<p>{children}</p>
		</div>
	);
};
