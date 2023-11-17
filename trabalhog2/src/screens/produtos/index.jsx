import { View, Text, StyleSheet, Button } from 'react-native';

export const Produtos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <Button
        title='ir para detalhes de produtos'
        onPress={() => navigation.navigate("DetalhesProdutos")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
