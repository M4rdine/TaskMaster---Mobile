import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Task } from '../types/task';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (updated: Task) => void;
  task: Task;
}

const priorities = [
  { label: 'Alta', value: 'high', color: 'red' },
  { label: 'Média', value: 'medium', color: 'orange' },
  { label: 'Baixa', value: 'low', color: 'green' },
];

export const EditTaskModal = ({ visible, onClose, onSave, task }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [startDate, setStartDate] = useState(new Date(task.createdAt || new Date()));
  const [dueDate, setDueDate] = useState(new Date(task.dueDate));
  const [priority, setPriority] = useState(task.priority || 'medium');
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [pickingStart, setPickingStart] = useState(true);

  const handleSave = () => {
    onSave({
      ...task,
      title,
      dueDate,
      createdAt: startDate,
      priority,
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/40 justify-center items-center px-6">
        <View className="w-full bg-white rounded-xl p-4">
          <Text className="text-lg font-semibold mb-3">Editar Tarefa</Text>

          <Text className="text-sm font-medium mb-1">Título</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            className="border border-gray-300 rounded px-3 py-2 mb-3"
          />

          <Text className="text-sm font-medium mb-1">Período</Text>
          <TouchableOpacity
            onPress={() => {
              setOpenDate(true);
              setPickingStart(true);
            }}
            className="border border-gray-300 rounded px-3 py-2 mb-3"
          >
            <Text className="text-gray-700">
              {startDate.toLocaleDateString()} → {dueDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          <Text className="text-sm font-medium mb-1">Prioridade</Text>
          <TouchableOpacity
            onPress={() => setShowPriorityMenu(!showPriorityMenu)}
            className="border border-gray-300 rounded px-3 py-2 mb-3"
          >
            <View className="flex-row items-center gap-2">
              <View
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: priorities.find(p => p.value === priority)?.color }}
              />
              <Text>
                {priorities.find(p => p.value === priority)?.label}
              </Text>
            </View>
          </TouchableOpacity>

          {showPriorityMenu && (
            <View className="bg-white border rounded mb-3 p-2 shadow">
              {priorities.map((p) => (
                <TouchableOpacity
                  key={p.value}
                  className="flex-row items-center gap-2 mb-2"
                  onPress={() => {
                    setPriority(p.value);
                    setShowPriorityMenu(false);
                  }}
                >
                  <View className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                  <Text>{p.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Botões */}
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity onPress={onClose} className="px-4 py-2 bg-gray-200 rounded">
              <Text className="text-gray-700">Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave} className="px-4 py-2 bg-purple-600 rounded">
              <Text className="text-white font-semibold">Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Picker */}
        <DatePicker
          modal
          mode="date"
          open={openDate}
          date={pickingStart ? startDate : dueDate}
          onConfirm={(date) => {
            pickingStart ? setStartDate(date) : setDueDate(date);
            if (pickingStart) {
              setPickingStart(false); // abre a próxima
            } else {
              setOpenDate(false);
            }
          }}
          onCancel={() => {
            setOpenDate(false);
            setPickingStart(true);
          }}
        />
      </View>
    </Modal>
  );
};
