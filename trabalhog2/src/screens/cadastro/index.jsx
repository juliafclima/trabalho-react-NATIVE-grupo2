import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
// Importei o ActivityIndicator e o Snackbar do react-native-paper
import { ActivityIndicator, Snackbar } from 'react-native-paper';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  // Adicionei um novo estado para controlar quando o indicador de atividade deve ser exibido
  const [loading, setLoading] = useState(false);
  // Adicionei estados para controlar a visibilidade e a mensagem do Snackbar
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigation = useNavigation();

  const cadastrarUsuario = async () => {
    const { nome, email, senha, confirmarSenha } = formData;

    // Aqui está sendo verificado se o nome, o email e a senha são válidos
    try {
      if (!nome || nome.length < 3) {
        throw new Error('O nome deve ter pelo menos 3 caracteres!');
      }
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

    if (!nome || !email || !senha || !confirmarSenha) {
      setErrorMessage('Preencha todos os campos!');
      setVisible(true);
      return;
    }

    if (senha !== confirmarSenha) {
      setErrorMessage('As senhas não coincidem!');
      setVisible(true);
      return;
    }

    // Aqui está ativando o indicador de atividade antes de iniciar a chamada da API
    setLoading(true);

    try {
      const response = await axios.post('https://6542dfe001b5e279de1fabce.mockapi.io/login', {
        nome,
        email,
        senha,
      });

      if (response.status === 201) {
        Alert.alert('Cadastro bem-sucedido!'); // Alerta quando o cadastro é bem-sucedido
        navigation.navigate('Login');
      } else {
        setErrorMessage('Erro ao cadastrar usuário. Tente novamente mais tarde.');
        setVisible(true);
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setErrorMessage('Erro ao cadastrar usuário. Tente novamente mais tarde.');
      setVisible(true);
    } finally {
      //Aqui está a desativação do indicador de atividade após a chamada da API ser concluída
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>
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
      <Button title="Cadastrar" onPress={cadastrarUsuario} disabled={loading} />

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
