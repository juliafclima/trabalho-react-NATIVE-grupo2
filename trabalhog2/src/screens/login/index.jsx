
import React, { useContext, useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
// Importei o ActivityIndicator e o Snackbar do react-native-paper
import { ActivityIndicator, Snackbar } from 'react-native-paper';
import { AuthContext } from '../../context/AuthProvider';


const SplashScreen = () => {
  return (
    <View style={styles.container22}>
      <Animatable.Image 
        animation="bounceIn"
        duration="3000"
        style={{marginBottom:340,width: 280, height: 200, resizeMode: 'contain' }}
        source={require("../../assets/login/Logo-Cod-Farma.png")}
      />
    </View>
  );
};

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Adicionei um novo estado para controlar quando o indicador de atividade deve ser exibido
  const [loading, setLoading] = useState(false);
  // Adicionei estados para controlar a visibilidade e a mensagem do Snackbar
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const { signin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  /* useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  } */

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{ width: 280, height: 200, resizeMode: 'contain' }} source={require("../../assets/login/Logo-Cod-Farma.png")} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          autoCorrect={false}
          onChangeText={setEmail} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          autoCorrect={false}
          onChangeText={setSenha}
          secureTextEntry />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSubmit}
          onPress={() => signin(email, senha)}
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
  },
  container22: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
