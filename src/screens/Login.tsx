import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../store/authStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const disabled = email.trim() === '' || senha.trim() === '';

  return (
    <View className="flex-1 justify-center px-6 bg-background dark:bg-background-dark">
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
        className='flex ml-auto mr-auto mb-8'
      />
      <Text className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">Entrar</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 mb-4 bg-white dark:bg-muted-dark text-black dark:text-white"
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 mb-6 bg-white dark:bg-muted-dark text-black dark:text-white"
      />

      <TouchableOpacity
        className={`rounded px-4 py-3 mb-3 ${disabled ? 'bg-gray-300' : 'bg-violet-500'}`}
        onPress={login}
        disabled={disabled}
      >
        <Text className="text-white text-center font-semibold">Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text className="text-sm text-center text-gray-500">
          Não tem conta? <Text className="text-violet-500">Cadastrar-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};