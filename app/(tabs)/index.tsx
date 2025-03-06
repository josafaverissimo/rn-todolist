import { Text } from "@/components/base/text";
import { styles } from "@/styles/global";
import { View } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.mainTitle}>ToDo</Text>
		</View>
	);
}
