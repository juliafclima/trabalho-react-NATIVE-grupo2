import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const produtos = [
  {
    id: 1,
    titulo: 'COMPRIMIDOS FOCU',
    preco: 15.99,
    imagem: require('../../assets/produtos/focu.jpg'),
  },
  {
    id: 2,
    titulo: 'PÍLULAS ZOOM',
    preco: 20.99,
    imagem: require('../../assets/produtos/zoom.jpg'),
  },
  {
    id: 3,
    titulo: 'TABLETES XÔ ANSIEDADE',
    preco: 15.99,
    imagem: require('../../assets/produtos/xoAnsiedade.jpg'),
  },
  {
    id: 4,
    titulo: 'COMPRIMIDOS TRAVA-LÍNGUA',
    preco: 20.99,
    imagem: require('../../assets/produtos/travaLingua.jpg'),
  },
  {
    id: 5,
    titulo: 'SACHÊ DO SONO',
    preco: 20.99,
    imagem: require('../../assets/produtos/sono.jpg'),
  },
];

export const Produtos = () => {
  const [quantidades, setQuantidades] = useState(produtos.map(() => 0));

  const handleQuantityChange = (index, amount) => {
    const novasQuantidades = [...quantidades];
    novasQuantidades[index] = Math.max(0, novasQuantidades[index] + amount);
    setQuantidades(novasQuantidades);
  };

  return (
    <ScrollView
      contentContainerStyle={estilos.scrollView}
      showsVerticalScrollIndicator={false}
    >
      {produtos.map((produto, index) => (
        <View style={estilos.card} key={produto.id}>
          <Image source={produto.imagem} style={estilos.imagem} />
          <Text style={estilos.titulo}>{produto.titulo}</Text>
          <Text style={estilos.preco}>R$ {produto.preco.toFixed(2)}</Text>
          <View style={estilos.containerQuantidade}>
            <View style={estilos.containerBotoesQuantidade}>
              <TouchableOpacity activeOpacity={0.7}
                onPress={() => handleQuantityChange(index, -1)}
                style={estilos.botaoQuantidade}
              >
                <Text style={estilos.botaoTexto}>-</Text>
              </TouchableOpacity>
              <Text style={estilos.quantidade}>{quantidades[index]}</Text>
              <TouchableOpacity activeOpacity={0.7}
                onPress={() => handleQuantityChange(index, 1)}
                style={estilos.botaoQuantidade}
              >
                <Text style={estilos.botaoTexto}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={estilos.containerBotaoComprar}>
              <TouchableOpacity activeOpacity={0.7}
                onPress={() => {
                  console.log(`Comprar ${quantidades[index]} unidades de ${produto.titulo}`);
                }}
                style={estilos.botaoComprar}
              >
                <Text style={estilos.botaoTexto}>Comprar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}
            onPress={() => {
              console.log(`Saiba mais sobre ${produto.titulo}`);
            }}
            style={estilos.botaoSaibaMais}
          >
            <Text style={estilos.botaoTextoDescricao}>Saiba Mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f17064',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '95%',
    height: 500,
    alignItems: 'center',
  },
  imagem: {
    width: '95%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  descricao: {
    fontSize: 12,
    marginTop: 5,
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  containerQuantidade: {
    marginTop: 10,
  },
  containerBotoesQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoQuantidade: {
    backgroundColor: '#55b3d1',
    borderRadius: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  containerBotaoComprar: {
    marginTop: 10,
  },
  botaoComprar: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  botaoTexto: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  botaoTextoDescricao: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  },
  quantidade: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  botaoSaibaMais: {
    backgroundColor: '#55b3d1',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity: 0.9,
  },
});
