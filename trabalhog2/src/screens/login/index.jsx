import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Home")}>
        <Text>
          Ir para home
        </Text>
      </TouchableOpacity>
    </View>
  )
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
})
