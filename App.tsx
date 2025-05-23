import React from 'react';
import { AppNavigator } from './src/navigation';

import { useThemeStore } from './src/store/themeStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens();

function App(): React.JSX.Element {
  const isDark = useThemeStore((s) => s.isDark);

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
