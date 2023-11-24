import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        keyboardType="numeric"
        value={preco}
        onChangeText={(text) => setPreco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline
        numberOfLines={10}
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Detalhes"
        multiline
        numberOfLines={10}
        value={detalhes}
        onChangeText={(text) => setDetalhes(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#009bbf',
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f17064',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

