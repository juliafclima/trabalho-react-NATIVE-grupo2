import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';

export const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false); 

  const handleNavigation = (screen) => {
    if (!screen) {
      Alert.alert('Erro! Navegação inválida!'); 
      return;
    }

    setLoading(true); 

   
    setTimeout(() => {
      setLoading(false); 
      navigation.navigate(screen); 
    }, 850);
  };

  return (
    <View style={styles.container}>
      <Image style={{ width: 280, height: 200, resizeMode: 'contain' }} source={require("../../assets/login/Logo-Cod-Farma.png")} />
      <View style={styles.entradas}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#55b3d1' }]} onPress={() => handleNavigation("Produtos")}>
          <Text style={{ color: '#fff' }}>
            Ir para produtos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#ffb25f' }]} onPress={() => handleNavigation("Integrantes")}>
          <Text style={{ color: '#fff' }}>
            Ir para integrantes
          </Text>
        </TouchableOpacity>
      </View>
      
      {loading && <ActivityIndicator size="large" color="#55b3d1" />}
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





