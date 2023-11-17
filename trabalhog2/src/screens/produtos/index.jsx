import { View, Text, StyleSheet } from 'react-native';

export const Produtos = () => {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
