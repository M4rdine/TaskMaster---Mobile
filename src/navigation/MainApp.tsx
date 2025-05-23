import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
const Stack = createNativeStackNavigator();
export const MainApp = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)