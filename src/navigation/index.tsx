import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { MainApp } from './MainApp';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  useEffect(() => {
    // quando isAuthenticated muda, o AppNavigator re-renderiza
  }, [isAuthenticated]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen name="Main" component={MainApp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};