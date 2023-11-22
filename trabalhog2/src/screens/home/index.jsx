import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 280, height: 200, resizeMode: 'contain' }} source={require("../../assets/login/Logo-Cod-Farma.png")} />
      <View style={styles.entradas}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#f17064' }]} onPress={() => navigation.navigate("Produtos")}>
          <Text style={{ color: '#fff' }}>
            Ir para produtos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#55b3d1' }]} onPress={() => navigation.navigate("Integrantes")}>
          <Text style={{ color: '#fff' }}>
            Ir para integrantes
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.saida}>
      <TouchableOpacity style={[styles.botao, { backgroundColor: '#ffb25f', width: '45%' }]} onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: '#fff' }}>
          Sair
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfefff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradas: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saida: {
    flex: 0.3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '85%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 }
  },
});
