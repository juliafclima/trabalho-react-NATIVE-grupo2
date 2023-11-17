import { View, Text, StyleSheet } from 'react-native';

export const DetalhesProdutos = () => {
  return (
    <View style={styles.container}>
      <Text>Detalhes de Produtos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
