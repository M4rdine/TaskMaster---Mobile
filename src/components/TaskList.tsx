import { FlatList, Text } from 'react-native';
import { useTaskStore } from '../store/taskStore';
import { TaskItem } from './TaskItem';
import { View } from 'react-native';

export const TaskList = () => {
  const tasks = useTaskStore((s) => s.tasks);
  const filter = useTaskStore((s) => s.filter);

  const filtered = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    return task.status === filter;
  });

  if (filtered.length === 0) {
    return (
      <View className="pt-10 flex flex-col gap-1">
        <Text className="text-center text-gray-500 font-medium text-lg">Nenhuma tarefa encontrada</Text>
        <Text className="text-gray-400 text-center text-sm font-normal">Adicione uma tarefa para começar</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filtered}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskItem task={item} />}
      contentContainerStyle={{ paddingBottom: 100, marginTop: 10, marginRight: 10, marginBottom: 10, marginLeft: 10}}
    />
  );
};
