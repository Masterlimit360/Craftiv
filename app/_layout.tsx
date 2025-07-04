import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF5E1" /> {/* light cream background */}
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#FFF5E1' }}
        edges={['top']} // Only apply safe area to the top
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
