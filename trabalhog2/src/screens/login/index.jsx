import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// Importei o ActivityIndicator e o Snackbar do react-native-paper
import { ActivityIndicator, Snackbar } from 'react-native-paper';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  // Adicionei um novo estado para controlar quando o indicador de atividade deve ser exibido
  const [loading, setLoading] = useState(false);
  // Adicionei estados para controlar a visibilidade e a mensagem do Snackbar
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const authenticateUser = async (email, senha) => {
    // Aqui está verificando se o email e a senha são válidos
    try {
      if (!email || !email.includes('@')) {
        throw new Error('Por favor, insira um email válido!');
      }
      if (!senha || senha.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres!');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setVisible(true);
      return;
    }

    // Aqui está ativando o indicador de atividade antes de iniciar a chamada da API
    setLoading(true);

    try {
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
            setErrorMessage('Senha incorreta. Tente novamente.');
            setVisible(true);
          }
        } else {
          setErrorMessage('Email não encontrado. Verifique as credenciais.');
          setVisible(true);
        }
      } else {
        setErrorMessage('Erro ao buscar usuário. Tente novamente mais tarde.');
        setVisible(true);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro ao fazer login. Tente novamente mais tarde.');
      setVisible(true);
    } finally {
      //Aqui está a desativação do indicador de atividade após a chamada da API ser concluída
      setLoading(false);
    }
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

        {/* Adicionei o ActivityIndicator que é exibido quando loading é true */}
        {loading && <ActivityIndicator animating={true} size="large" color="#0000ff" />}
        {/* Adicionei o Snackbar que é exibido quando visible é true */}
        <Snackbar
          // https://callstack.github.io/react-native-paper/docs/components/Snackbar
          visible={visible}
          onDismiss={() => setVisible(false)}
          action={{
            label: 'Fechar',
            onPress: () => {
              setVisible(false);
            },
          }}
          style={{ backgroundColor: 'red' }}
        >
          {errorMessage}
        </Snackbar>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Cadastro')}
          activeOpacity={0.7}
          style={styles.btnRegister}
        >
          <Text style={styles.registerText}>Cadastrar funcionário</Text>
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
