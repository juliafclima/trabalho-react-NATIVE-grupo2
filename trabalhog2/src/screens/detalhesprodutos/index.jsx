import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const produtos = [
  {
    nome: "COMPRIMIDOS FOCU",
    descricao:
      "Para que você não se distraia durante a aula e foque somente no que importa, o professor.",
    detalhes:
      '"Ah mas meu CPU está pegando fogo" Sua cabeça também, mas mantenha o FOCU com as pílulas FOCU.',
  },
  {
    nome: "PÍLULAS ZOOM",
    descricao:
      "Pra os míopers, astigmatismers, hipermetropiers que precisam que os professores, monitores e amiguinhos aumentem a letra para conseguir enxergar.",
    detalhes:
      "Se liberte desse sofrimento com as pílulas zoom. As pílulas zoom substituem qualquer consulta absurda de cara com o oftalmo. As pílulas zoom substituem óculos e lentes de contato.",
  },
  {
    nome: "SACHÊ DO SONO",
    descricao: "Para quem revira 342 vezes na cama antes de conseguir dormir.",

    detalhes:
      'Para você que vai deitar pensando "mas e se eu colocasse uma vírgula na linha 15?!" (Este produto não impede sonhos, pesadelos e afins envolvendo programação. Caso persistam os sintomas, ceda, levante e code. Esta pode ser a solução do seu erro.)',
  },
  {
    nome: 'TABLETES "XÔ ANSIEDADE"',
    descricao:
      "Para evitar visitinhas frequentes à geladeira, beliscos em pacotes de biscoitos e qualquer tipo de mastigação indevida.",
    detalhes:
      'Com os tabletes mastigáveis "xô ansiedade" você mastigará saúde e bem-estar. "Ah mas eu comprei 1 kg de amendoim na americanas" Jogue fora. "Ah mas eu tenho cupons do ifood" Deixe expirar.',
  },
  {
    nome: 'COMPRIMIDOS "TRAVA-LÍNGUA"',
    descricao:
      "Os comprimidos revestidos TRAVA-LÍNGUA funcionam bloqueando sua língua nos momentos de estresse para que a sinceridade não saia pela boca.",
    detalhes:
      'Com as pílulas "trava-língua" nenhuma palavra sairá da sua boca quando seu nível de estresse estiver alto, evitando sinceridade excessiva. (O produto não tem ação "trava dedos", então cuidado com o que digita)',
  },
];

export const DetalhesProduto = ({ route }) => {
  const { nome, descricao, detalhes, preco, imagem, cor } = route.params;
  const [quantidade, setQuantidade] = useState(1);
  const navigation = useNavigation();

  const handleQuantityChange = (amount) => {
    setQuantidade((prevQuantidade) => Math.max(1, prevQuantidade + amount));
  };

  const adicionarAoCarrinho = () => {
    console.log(`Adicionado ao carrinho: ${quantidade} x ${nome}`);
  };

  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>

      <View style={styles.containerQuantidade}>
        <TouchableOpacity
          onPress={() => handleQuantityChange(-1)}
          style={styles.botaoQuantidade}
        >
          <Text style={styles.botaoTexto}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantidade}>{quantidade}</Text>
        <TouchableOpacity
          onPress={() => handleQuantityChange(1)}
          style={styles.botaoQuantidade}
        >
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={adicionarAoCarrinho}
        style={[styles.botaoAdicionar, { backgroundColor: cor }]}
      >
        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  descricao: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  containerQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  botaoQuantidade: {
    backgroundColor: "#55b3d1",
    borderRadius: 5,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  botaoTexto: {
    fontSize: 16,
    color: "white",
  },
  quantidade: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  botaoAdicionar: {
    backgroundColor: "#55b3d1",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});