import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../types/task';
import { formatDate } from '../utils/formatDate';
import { useTaskStore } from '../store/taskStore';
import { useState } from 'react';
import { EditTaskModal } from './EditTaskModal';
import { useThemeStore } from '../store/themeStore';

interface Props {
    task: Task;
}

export const TaskItem = ({ task }: Props) => {
    const [editing, setEditing] = useState(false);
    const isDark = useThemeStore((s) => s.isDark);

    const toggle = useTaskStore((s) => s.toggleTask);
    const remove = useTaskStore((s) => s.removeTask);

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'bg-red-500';
            case 'medium':
                return 'bg-orange-400';
            case 'low':
                return 'bg-green-500';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <View
            className={`flex-row justify-between items-start px-4 py-3 mb-2 ${isDark ? "bg-azure-100" : "bg-white"} rounded-xl shadow-sm`}
        >
            <TouchableOpacity onPress={() => toggle(task.id)} className="flex-row items-start flex-1">
                <View className="w-5 h-5 rounded border border-purple-600 mt-1 mr-3 items-center justify-center">
                    {task.status === 'DONE' && (
                        <Text className="text-xs">✓</Text>
                    )}
                </View>

                <View>
                    <Text className={`text-base ${isDark && "text-white"} font-medium ${task.status === 'DONE' && !isDark ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {task.title}
                    </Text>

                    <View className="flex-row items-center mt-1">
                        <View className={`w-2 h-2 rounded-full mr-2 ${getPriorityColor(task.priority || '')}`} />
                        <Text className="text-sm text-gray-500">
                            {formatDate(task.createdAt)} → {formatDate(task.dueDate)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center ml-2 gap-2">
                <TouchableOpacity onPress={() => setEditing(true)}>
                    <Text>✏️</Text>
                </TouchableOpacity>

                <EditTaskModal
                    visible={editing}
                    onClose={() => setEditing(false)}
                    onSave={(updatedTask) => useTaskStore.getState().updateTask(updatedTask)}
                    task={task}
                />

                <TouchableOpacity onPress={() => remove(task.id)} className="px-1">
                    <Text className="text-red-500 text-base">🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
