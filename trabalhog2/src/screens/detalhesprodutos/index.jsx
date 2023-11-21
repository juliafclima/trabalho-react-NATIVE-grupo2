import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const produtos = [
  {
    foto: require('../../assets/produtos/focu.jpg'),
    nome: "COMPRIMIDOS FOCU",
    preco: 15.99,
    descricao:
      "Para que você não se distraia durante a aula e foque somente no que importa, o professor.",
    detalhes:
      '"Ah mas meu CPU está pegando fogo" Sua cabeça também, mas mantenha o FOCU com as pílulas FOCU.',
  },
  {
    foto: require('../../assets/produtos/zoom.jpg'),
    nome: "PÍLULAS ZOOM",
    preco: 20.99,
    descricao:
      "Pra os míopers, astigmatismers, hipermetropiers que precisam que os professores, monitores e amiguinhos aumentem a letra para conseguir enxergar.",
    detalhes:
      "Se liberte desse sofrimento com as pílulas zoom. As pílulas zoom substituem qualquer consulta absurda de cara com o oftalmo. As pílulas zoom substituem óculos e lentes de contato.",
  },
  {
    foto: require('../../assets/produtos/sono.jpg'),
    nome: "SACHÊ DO SONO",
    preco: 20.99,
    descricao: "Para quem revira 342 vezes na cama antes de conseguir dormir.",
    detalhes:
      'Para você que vai deitar pensando "mas e se eu colocasse uma vírgula na linha 15?!" (Este produto não impede sonhos, pesadelos e afins envolvendo programação. Caso persistam os sintomas, ceda, levante e code. Esta pode ser a solução do seu erro.)',
  },
  {
    foto: require('../../assets/produtos/xoAnsiedade.jpg'),
    nome: 'TABLETES "XÔ ANSIEDADE"',
    preco: 15.99,
    descricao:
      "Para evitar visitinhas frequentes à geladeira, beliscos em pacotes de biscoitos e qualquer tipo de mastigação indevida.",
    detalhes:
      'Com os tabletes mastigáveis "xô ansiedade" você mastigará saúde e bem-estar. "Ah mas eu comprei 1 kg de amendoim na americanas" Jogue fora. "Ah mas eu tenho cupons do ifood" Deixe expirar.',
  },
  {
    foto: require('../../assets/produtos/travaLingua.jpg'),
    nome: 'COMPRIMIDOS "TRAVA-LÍNGUA"',
    preco: 20.99,
    descricao:
      "Os comprimidos revestidos TRAVA-LÍNGUA funcionam bloqueando sua língua nos momentos de estresse para que a sinceridade não saia pela boca.",
    detalhes:
      'Com as pílulas "trava-língua" nenhuma palavra sairá da sua boca quando seu nível de estresse estiver alto, evitando sinceridade excessiva. (O produto não tem ação "trava dedos", então cuidado com o que digita)',
  },
];

const getCardColor = (index) => {
  const colors = ["#f17064", "#ffb25f", "#55b3d1"];
  return colors[index % colors.length];
};

const DetalheProduto = ({ nome, descricao, detalhes, preco, foto, index }) => {
  const cardStyle = {
    ...styles.card,
    backgroundColor: getCardColor(index),
  };

  const navigation = useNavigation();

  return (
    <Card style={cardStyle}>
      <Card.Cover style={styles.foto} source={foto} />
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.subtitle}>{descricao}</Text>
      <Text style={styles.subtitle2}>{detalhes}</Text>

      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>

      <View style={{flexDirection: 'row', justifyContent:'center'}}> 
        <TouchableOpacity style={styles.botao}
        >
          <Text style={styles.botaoTexto}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Apagar</Text>
        </TouchableOpacity>

      </View>
    </Card>
  );
};

export const DetalhesProdutos = () => (
  <ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  >
    {produtos.map((produto, index) => (
      <DetalheProduto key={index} index={index} {...produto} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eeeff4",
    padding: 15,
  },
  card: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 15,
  },
  cards1: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f17064",
  },
  cards2: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#ffb25f",
  },
  cards3: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#55b3d1",
  },
  title: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  subtitle: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",
    backgroundColor: "white",
    padding: 8,
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
  },
  subtitle2: {
    color: "black",
    fontSize: 18,
    paddingStart: "5",
    backgroundColor: "white",
    padding: 8,
    borderEndEndRadius: 12,
    borderEndStartRadius: 12,
  },
  botao: {
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 14,
  },
  preco: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: 'white'
  },
  botaoTextoDescricao: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  quantidade: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
