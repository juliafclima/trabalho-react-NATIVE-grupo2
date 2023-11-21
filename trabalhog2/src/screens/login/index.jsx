import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{width: 280, height: 200, resizeMode: 'contain'}} source={require("../../assets/login/Logo-Cod-Farma.png")}
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
  submitText: {
    color: '#fff',
    fontSize: 18,
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