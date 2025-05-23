import { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useTaskStore } from '../store/taskStore';
import { Task } from '../types/task';
import { useThemeStore } from '../store/themeStore';

const priorities = [
  { label: 'Alta', color: 'red', value: 'high' },
  { label: 'Média', color: 'orange', value: 'medium' },
  { label: 'Baixa', color: 'green', value: 'low' },
];

export const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [showPriority, setShowPriority] = useState(false);
  const [priority, setPriority] = useState(priorities[1]);
  const [focused, setFocused] = useState(false);

  const addTask = useTaskStore((s) => s.addTask);

  const handleAdd = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      dueDate: date,
      status: 'PENDING',
      createdAt: new Date(),
      priority: priority.value, 
    };
    addTask(newTask);
    setTitle('');
    setDate(new Date());
    setPriority(priorities[1]); 
  };

  const isDark = useThemeStore((s) => s.isDark);

  return (
    <View className="flex-row items-center justify-between px-2">
      <View
        className={`flex-row items-center rounded-full px-3 py-2 mr-2 flex-1 ${isDark ? "bg-azure-100" : "bg-background"} border ${
          focused ? 'border-purple-600' : 'border-gray-300'
        }`}
      >
        <TextInput
          placeholder="Adicionar uma nova tarefa..."
          value={title}
          onChangeText={setTitle}
          className={`flex-1 text-sm ${isDark ? "text-gray-100" : "text-gray-800"} mr-2`}
          placeholderTextColor="#6B7280"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <TouchableOpacity onPress={() => setOpenDate(true)} className="mx-1">
          <Image
            source={require('../assets/images/calendar.png')}
            style={{ width: 28, height: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowPriority(true)} className="ml-1">
          <View
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: priority.color }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleAdd}
        className="w-10 h-10 bg-purple-600 rounded-full items-center justify-center"
      >
        <Text className="text-white text-lg font-bold">+</Text>
      </TouchableOpacity>

      <Modal visible={showPriority} transparent animationType="fade">
        <Pressable
          className="flex-1 justify-end items-end px-4 pb-16 bg-black/30"
          onPress={() => setShowPriority(false)}
        >
          <View className="bg-white rounded-lg shadow p-3">
            {priorities.map((item) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => {
                  setPriority(item);
                  setShowPriority(false);
                }}
                className="flex-row items-center mb-2"
              >
                <View
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <Text className="text-gray-800">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={(selected) => {
          setOpenDate(false);
          setDate(selected);
        }}
        onCancel={() => setOpenDate(false)}
      />
    </View>
  );
};
