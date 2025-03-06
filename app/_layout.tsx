import { colors } from "@/constants/colors";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const [loaded, error] = useFonts({
		Asap: require("@/assets/fonts/Asap.ttf"),
	});

	NavigationBar.setBackgroundColorAsync(colors.brand[500]);

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="light" backgroundColor={colors.brand[500]} />

			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</SafeAreaView>
	);
}
