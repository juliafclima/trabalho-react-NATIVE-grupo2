import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const authenticateUser = async (email, senha) => {
    try {
      setLoading(true);

      const response = await axios.get(`https://6542dfe001b5e279de1fabce.mockapi.io/login?email=${email}`);

      if (response.status === 200) {
        const userData = response.data;

        if (userData.length > 0) {
          const user = userData[0];
          if (user.senha === senha) {
            Alert.alert('Login bem-sucedido!');
            navigation.navigate('Home');
            setFormData({ email: '', senha: '' });
          } else {
            Alert.alert('Senha incorreta. Tente novamente.');
          }
        } else {
          Alert.alert('Email não encontrado. Verifique as credenciais.');
        }
      } else {
        Alert.alert('Erro ao buscar usuário. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro ao fazer login. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const goToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{ width: 280, height: 200, resizeMode: 'contain' }} source={require("../../assets/login/Logo-Cod-Farma.png")} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          autoCorrect={false}
          onChangeText={(text) => setFormData((prevData) => ({ ...prevData, email: text }))} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={formData.senha}
          autoCorrect={false}
          onChangeText={(text) => setFormData((prevData) => ({ ...prevData, senha: text }))}
          secureTextEntry />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSubmit}
          onPress={() => authenticateUser(formData.email, formData.senha)}
          disabled={loading}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToCadastro}
          activeOpacity={0.7}
          style={styles.btnRegister}
        >
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 40,
    color: '#009bbf',
    fontSize: 17,
    borderRadius: 5,
    paddingBottom: 10,
  },
  btnSubmit: {
    backgroundColor: '#009bbf',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#009bbf',
    fontSize: 15
  },
  btnText: {
    color: '#fff',
    fontSize: 20
  }
});
