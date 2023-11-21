import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const navigation = useNavigation();

  const cadastrarUsuario = async () => {
    const { nome, email, senha, confirmarSenha } = formData;

    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.post('https://6542dfe001b5e279de1fabce.mockapi.io/login', {
        nome,
        email,
        senha,
      });

      if (response.status === 201) {
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(value) => setFormData({ ...formData, nome: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => setFormData({ ...formData, email: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={formData.senha}
        onChangeText={(value) => setFormData({ ...formData, senha: value })}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmação de Senha"
        value={formData.confirmarSenha}
        onChangeText={(value) => setFormData({ ...formData, confirmarSenha: value })}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={cadastrarUsuario} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55b3d1', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f17064', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
};
