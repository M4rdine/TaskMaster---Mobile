import { FilterTabs } from '../components/FilterTabs';
import { Header } from '../components/Header';
import { TaskInput } from '../components/TaskInput';
import { TaskList } from '../components/TaskList';
import { useThemeStore } from '../store/themeStore';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

export const Home = () => {
const isDark = useThemeStore((s) => s.isDark);

  return (
    <View className={isDark ? 'flex-1 bg-azure-200' : 'flex-1 bg-background'}>
      <Header />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={80} 
      >
        <View className="flex-1">
          <View className={`w-full border-b border-solid ${isDark ? "border-azure-100" : "border-gray-100"} `}>
            <FilterTabs />
          </View>
        <View className={isDark ? "h-full bg-azure-400" : "h-full bg-gray-100"}>
          <TaskList />
        </View>
        </View>

        <View className={`px-4 pb-4 mb-4 pt-4 border-y border-solid ${isDark ? "bg-azure-200 border-azure-100" : "bg-background border-gray-200"}`}>
          <TaskInput />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}