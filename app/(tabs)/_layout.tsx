import { TabButton } from "@/components/nav/tabs/button";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { TabList, TabSlot, TabTrigger, Tabs } from "expo-router/ui";
import { StyleSheet } from "react-native";

export default function TabLayout() {
	return (
		<Tabs>
			<TabSlot />

			<TabList style={styles.tablist}>
				<TabTrigger name="home" href="/" asChild>
					<TabButton icon="home" />
				</TabTrigger>

				<TabTrigger name="settings" href="/(tabs)/history" asChild>
					<TabButton icon="history" />
				</TabTrigger>
			</TabList>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tablist: {
		paddingVertical: spacing.md,
		justifyContent: "space-evenly",
		backgroundColor: colors.brand[50],
	},
});
