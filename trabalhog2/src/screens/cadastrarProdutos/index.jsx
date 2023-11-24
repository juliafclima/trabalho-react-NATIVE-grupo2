import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export const CadastrarProdutos = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [imagem, setImagem] = useState('');

  const handleCadastro = (callback) => {
    console.log('Nome:', nome);
    console.log('Preço:', preco);
    console.log('Descrição:', descricao);
    console.log('Detalhes:', detalhes);
    console.log('Imagem :', imagem);

    if (typeof callback === 'function') {
      callback({
        nome,
        preco,
        descricao,
        detalhes,
        imagem,
      });
    }
  };

  const addProduto = (data) => {
    axios
      .post("https://6542dfe001b5e279de1fabce.mockapi.io/produto", data)
      .then(() => {
        console.log('Deu certo!');
        navigation.navigate('Produtos');
      })
      .catch(() => {
        alert('Deu errado!');
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
   
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto:"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço:"
        keyboardType="numeric"
        value={preco}
        onChangeText={(text) => setPreco(text)}
      />
      <TextInput
        style={styles.input1}
        placeholder="Descrição:"
        multiline
       
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input1}
        placeholder="Detalhes:"
        multiline
        
        value={detalhes}
        onChangeText={(text) => setDetalhes(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem:"
        value={imagem}
        onChangeText={(text) => setImagem(text)}
      />
      {imagem ? (
        <Image source={{ uri: imagem }} style={styles.image} />
      ) : null}
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ ...styles.button }}
        onPress={() => handleCadastro(addProduto)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 

  container: {
  
    padding: 16,
    backgroundColor: "#55b2d138",
  },
  subContainer: {
    flex: 1,
    width:"100%",
    height: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "flex-end",
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
    color: "gray",
    borderRadius: 8,
    minHeight: 23,
    

  },


  input1: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    backgroundColor: "#fff",
    color: "gray",
    borderRadius: 8,
    minHeight: 65,
   

  },







  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f17064',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
   

  },
});

