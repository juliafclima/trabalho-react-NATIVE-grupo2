import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Produtos")}>
        <Text>
          Ir para produtos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Integrantes")}>
        <Text>
          Ir para integrantes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Login")}>
        <Text>
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
  },
  botao: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: '100%',
    backgroundColor: 'lightblue',
  },
});
