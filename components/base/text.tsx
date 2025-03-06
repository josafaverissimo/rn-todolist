import { colors } from "@/constants/colors";
import { typograph } from "@/constants/typograph";
import {
	Text as RNText,
	type TextProps as RNTextProps,
	type TextStyle,
} from "react-native";

export function Text({ children, ...props }: RNTextProps) {
	const defaultStyles = {
		fontSize: typograph.body,
		color: colors.brand[600],
		fontFamily: "Asap",
	};
	const propsStyles = props.style as TextStyle;

	props.style = undefined;

	return (
		<RNText style={{ ...defaultStyles, ...propsStyles }} {...props}>
			{children}
		</RNText>
	);
}
