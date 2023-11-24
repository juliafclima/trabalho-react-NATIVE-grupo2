import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  ImageBackground
} from "react-native";

export const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleNavigation = (screen) => {
    if (!screen) {
      Alert.alert("Erro! Navegação inválida!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate(screen);
    }, 850);
  };

  return (
    <ImageBackground
      source={require("../../assets/produtos/fundo.jpg")} 
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 280, height: 200, resizeMode: "contain" }}
          source={require("../../assets/login/Logo-Cod-Farma.png")}
        />
        <View style={styles.entradas}>
          <TouchableOpacity
            style={styles.botao1}
            onPress={() => handleNavigation("Produtos")}
          >
            <Text style={styles.texto} >Ir para produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao2}
            onPress={() => handleNavigation("Integrantes")}
          >
            <Text style={styles.texto} >Ir para integrantes</Text>
          </TouchableOpacity>
        </View>

        {loading && <ActivityIndicator size="large" color="#55b3d1" />}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  entradas: {
    flex: 0.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  saida: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  


  botao1: {
    padding: 10,
    backgroundColor: "#55b3d1" ,
    alignItems: "center",
    borderRadius: 8,
    width: "85%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
  },


  botao2: {
    padding: 10,
    backgroundColor: "#f17064",
    alignItems: "center",
    borderRadius: 8,
    width: "85%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
  },


  texto: {

fontSize: 20,
color: 'white',

  },


});

