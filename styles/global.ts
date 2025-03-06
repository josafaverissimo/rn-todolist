import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typograph } from "@/constants/typograph";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: spacing.md,
		paddingVertical: spacing.sm,
		backgroundColor: colors.brand[50],
	},
	mainTitle: {
		fontSize: typograph.titleLg,
		alignSelf: "center",
	},
});
