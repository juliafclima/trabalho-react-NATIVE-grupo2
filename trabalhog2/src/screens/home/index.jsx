import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 280, height: 200, resizeMode: 'contain' }} source={require("../../assets/login/Logo-Cod-Farma.png")} />
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
      <TouchableOpacity style={[styles.botao, { backgroundColor: '#ffb25f' }]} onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: '#fff' }}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    marginVertical: 10,
  },
});
