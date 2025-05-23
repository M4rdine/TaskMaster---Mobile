import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useThemeStore } from '../store/themeStore';

export const Header = () => {
  const isDark = useThemeStore((s) => s.isDark);

  const toggleDark = useThemeStore((s) => s.toggleTheme);

  return (
    <View className={`${isDark ? "border-azure-100" : "border-gray-100"} flex-row items-center justify-between px-4 py-4 border-b border-solid mt-10`}>
      {isDark ? <Image
        source={require('../assets/images/logo-dark.png')}
        resizeMode="contain"
      /> : <Image
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />}

      <TouchableOpacity onPress={toggleDark}>
        <View className={`${isDark ? "bg-azure-200" : "bg-gray-200"} w-8 h-8 rounded-full items-center justify-center`}>
          <Text className="text-base">
            {isDark ? (
              "🔆") : (
              "🌙")}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
