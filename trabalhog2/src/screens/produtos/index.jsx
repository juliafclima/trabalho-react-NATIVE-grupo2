import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Produtos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("DetalhesProdutos")}>
        <Text>
          Ir para detalhe de produtos
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
    color: 'white',
    backgroundColor: 'lightblue',
  },
});
