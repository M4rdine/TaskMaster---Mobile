import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTaskStore } from '../store/taskStore';
import { useThemeStore } from '../store/themeStore';

const filters = [
    {
        label: 'Todas', value: 'ALL', icon: "📋"
    },
    {
        label: 'Pendentes', value: 'PENDING', icon: "⏰"
    },
    {
        label: 'Concluídas', value: 'DONE', icon: "✅"
    },
];

export const FilterTabs = () => {
    const filter = useTaskStore((s) => s.filter);
    const setFilter = useTaskStore((s) => s.setFilter);
    const tasks = useTaskStore((s) => s.tasks);
    const isDark = useThemeStore((s) => s.isDark);

    const countByStatus = {
        ALL: tasks.length,
        PENDING: tasks.filter((t) => t.status === 'PENDING').length,
        DONE: tasks.filter((t) => t.status === 'DONE').length,
    };

    return (
        <View className={`${isDark ? "bg-azure-100" : "bg-gray-100"} flex-row justify-between items-center mt-2 px-2 mb-2 mx-4 py-1 rounded-full`}>
            {filters.map((tab) => {
                const isActive = filter === tab.value;
                return (
                    <TouchableOpacity
                        key={tab.value}
                        onPress={() => setFilter(tab.value as any)}
                        className={`flex-row items-center px-1 py-1.5 mx-1 rounded-full ${isActive ? 'bg-purple-600' : ''
                            }`}
                    >
                        <Text className={`mr-1 ${isActive ? 'text-white' : 'text-gray-500'} ${isDark ? "text-white" : "text-gray-500"}`}>
                            {tab.icon}
                        </Text>
                        <Text className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'} ${isDark && !isActive && "text-azure-300"}`}>
                            {tab.label}
                        </Text>
                        <View
                            className={`ml-2 w-5 h-5 rounded-full items-center justify-center ${isActive ? 'bg-white' : 'bg-gray-200'
                                }`}
                        >
                            <Text
                                className={`text-xs font-semibold ${isActive ? 'text-purple-600' : 'text-gray-500'
                                    }`}
                            >
                                {countByStatus[tab.value as keyof typeof countByStatus]}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
