import { View, Text, StyleSheet, Button } from 'react-native'

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title='Ir para home'
        onPress={() => navigation.navigate("Home")} />
      <Button
        title='Ir para produtos'
        onPress={() => navigation.navigate("Produtos")} />
      <Button
        title='Ir para integrantes'
        onPress={() => navigation.navigate("Integrantes")} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
