import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

export const UpdateProdutos = ({ route, navigation }) => {
  const productId = route?.params;
  const [updated, setUpdated] = useState(false);
  const [produto, setProduto] = useState("");

  useEffect(() => {
    axios
      .get(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${productId}`)
      .then((response) => {
        const produto = response.data;
        if (
          produto &&
          produto.nome &&
          produto.preco &&
          produto.imagem &&
          produto.descricao &&
          produto.detalhes
        ) {
          setProduto(produto);
          setUpdated(true);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do produto:", error);
      });
  }, [productId, updated]);

  const handleAtualizacao = () => {
    if (
      !produto.nome.trim() ||
      !produto.descricao.trim() ||
      isNaN(produto.preco)
    ) {
      alert("Por favor, preencha todos os campos corretamente.");

      return;
    }
    console.log("Por favor, preencha todos os campos corretamente.");

    axios
      .put(
        `https://6542dfe001b5e279de1fabce.mockapi.io/produto/${productId}`,
        produto
      )
      .then(() => {
        console.log("Produto atualizado com sucesso!");
        setUpdated(true);
        navigation.navigate("Produtos");
      })
      .catch((error) => {
        console.error("Erro ao atualizar o produto:", error);
        alert("Erro ao atualizar o produto!");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={produto.nome}
          onChangeText={(text) => setProduto({ ...produto, nome: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={produto.preco}
          onChangeText={(text) => setProduto({ ...produto, preco: text })}
        />
        <TextInput
          style={styles.input1}
          placeholder="Descrição"
          multiline
          value={produto.descricao}
          onChangeText={(text) => setProduto({ ...produto, descricao: text })}
        />
        <TextInput
          style={styles.input1}
          placeholder="Detalhes"
          multiline
          value={produto.detalhes}
          onChangeText={(text) => setProduto({ ...produto, detalhes: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={produto.imagem}
          onChangeText={(text) => setProduto({ ...produto, imagem: text })}
        />

        <Image
          source={{ uri: `../../assets/produtos/${produto.imagem}` }}
          style={styles.image}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ ...styles.button }}
          onPress={handleAtualizacao}
        >
          <Text style={styles.buttonText}>ATUALIZAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#55b2d138",
  },
  subContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#55b2d19d",
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 8,
    minHeight: 23,

  },


  input1: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 8,
    minHeight: 65,

  },



  image: {
    width: 130,
    height: 130,
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#f17064",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 4 },
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
