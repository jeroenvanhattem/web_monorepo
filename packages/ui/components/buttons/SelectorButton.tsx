import "../../style/main.scss";
import { ButtonText } from "../typography";
import { Colors } from "../../theme/Colors";
import classNames from "classnames";
import { ReactNode } from "react";

interface SelectorButtonProps {
	id?: string;
	disabled?: boolean;
	isActive?: boolean;
	size?: "small" | "medium" | "large" | "narrow" | "compact" | "wide";
	inverted?: boolean;
	onPress: () => void;
	style?: any;
	secondary?: boolean;
	tertiary?: boolean;
	children: ReactNode | JSX.Element | string;
}

export const SelectorButton = ({
	disabled,
	children,
	onPress,
	isActive = false,
	size = "small",
	inverted = false,
	style,
	secondary = false,
	tertiary = false,
}: unknown & SelectorButtonProps) => {
	return (
		<div
			className={classNames("selector-button--primary", {
				"selector-button--small": size === "small",
				"selector-button--medium": size === "medium",
				"selector-button--large": size === "large",
				"selector-button--narrow": size === "narrow",
				"selector-button--compact": size === "compact",
				"selector-button--wide": size === "wide",
				"selector-button--inverted": inverted,
				"selector-button--secondary": secondary,
				"selector-button--tertiary": tertiary,
				"selector-button--disabled": disabled,
				"selector-button--active": isActive,
			})}
			onClick={disabled ? () => {} : onPress}
		>
			<ButtonText small centered>
				{children}
			</ButtonText>
		</div>
	);
};
