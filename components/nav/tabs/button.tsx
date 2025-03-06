import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { typograph } from "@/constants/typograph";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { TabTriggerSlotProps } from "expo-router/ui";
import { type ComponentProps, type Ref, forwardRef } from "react";
import { Pressable, StyleSheet, Text, type View } from "react-native";

type Icon = ComponentProps<typeof FontAwesome>["name"];

export type TabButtonProps = TabTriggerSlotProps & {
	icon?: Icon;
};

export const TabButton = forwardRef(
	({ icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
		const iconColor = isFocused ? colors.brand[400] : colors.brand[500];

		return (
			<Pressable ref={ref} {...props} style={styles.container}>
				<FontAwesome name={icon} size={spacing.lg} color={iconColor} />
			</Pressable>
		);
	},
);

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		alignItems: "center",
		gap: spacing.sm,
		padding: spacing.md,
		backgroundColor: colors.brand[100],
		borderRadius: 10,
		boxShadow: "2 2 6 #0003",
	},
	tabName: {
		fontSize: typograph.bodySm,
		color: colors.brand[500],
	},
	activeTab: {
		color: colors.brand[400],
	},
});
