import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {Logo} from '../../assets/login/Logo-Cod-Farma.png'

export const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={Logo}
        />
      </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TextInput
        style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "fff"
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: '50',
  },

  imputed: {
    backgroundColor:'FFF',
    width:'90%',
    marginBottom: '15',
    color: '#222',
    fontSize: '17',
    borderRadius: '30',
    paddingBottom: '10'
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: '45',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30',
  },

  submitText:{ 
    color: '#FFF',
    fontSize: '18',
  },

  btnRegister:{
  marginTop: '10',
  },

  registerText:{
    color: '#FFF', 
  }

});