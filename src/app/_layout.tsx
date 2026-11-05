import { Stack } from "expo-router";
import "./../../global.css"

export default function RootLayout() {
  return (
      <Stack>
          <Stack.Screen name="index" options={{
              headerShown: false,
          }} />
          <Stack.Screen name="Settings" options={{
              headerShown: false,
              presentation: "modal",
          }} />
          <Stack.Screen name="Choose" options={{
              headerShown: false,
              presentation: "modal",
          }} />
      </Stack>
  );
}
