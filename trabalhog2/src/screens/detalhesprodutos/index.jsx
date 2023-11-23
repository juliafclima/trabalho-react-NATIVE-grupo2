import React from "react";
import { TouchableOpacity, View, Text, Alert } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { styles } from "./styles";

/* const produtos = [
  {
    foto: require("../../assets/produtos/focu.jpg"),
    nome: "COMPRIMIDOS FOCU",
    preco: 15.99,
    descricao:
      "Para que você não se distraia durante a aula e foque somente no que importa, o professor.",
    detalhes:
      '"Ah mas meu CPU está pegando fogo" Sua cabeça também, mas mantenha o FOCU com as pílulas FOCU.',
  },
  {
    foto: require("../../assets/produtos/zoom.jpg"),
    nome: "PÍLULAS ZOOM",
    preco: 20.99,
    descricao:
      "Para os míopers, astigmatismers, hipermetropiers que precisam que os professores, monitores e amiguinhos aumentem a letra para conseguir enxergar.",
    detalhes:
      "Se liberte desse sofrimento com as pílulas zoom. As pílulas zoom substituem qualquer consulta absurda de cara com o oftalmo. As pílulas zoom substituem óculos e lentes de contato.",
  },
  {
    foto: require("../../assets/produtos/sono.jpg"),
    nome: "SACHÊ DO SONO",
    preco: 20.99,
    descricao: "Para quem revira 342 vezes na cama antes de conseguir dormir.",
    detalhes:
      'Para você que vai deitar pensando "mas e se eu colocasse uma vírgula na linha 15?!" (Este produto não impede sonhos, pesadelos e afins envolvendo programação. Caso persistam os sintomas, ceda, levante e code. Esta pode ser a solução do seu erro.)',
  },
  {
    foto: require("../../assets/produtos/xoAnsiedade.jpg"),
    nome: 'TABLETES "XÔ ANSIEDADE"',
    preco: 15.99,
    descricao:
      "Para evitar visitinhas frequentes à geladeira, beliscos em pacotes de biscoitos e qualquer tipo de mastigação indevida.",
    detalhes:
      'Com os tabletes mastigáveis "xô ansiedade" você mastigará saúde e bem-estar. "Ah mas eu comprei 1 kg de amendoim na americanas" Jogue fora. "Ah mas eu tenho cupons do ifood" Deixe expirar.',
  },
  {
    foto: require("../../assets/produtos/travaLingua.jpg"),
    nome: 'COMPRIMIDOS "TRAVA-LÍNGUA"',
    preco: 20.99,
    descricao:
      "Os comprimidos revestidos TRAVA-LÍNGUA funcionam bloqueando sua língua nos momentos de estresse para que a sinceridade não saia pela boca.",
    detalhes:
      'Com as pílulas "trava-língua" nenhuma palavra sairá da sua boca quando seu nível de estresse estiver alto, evitando sinceridade excessiva. (O produto não tem ação "trava dedos", então cuidado com o que digita)',
  },
];
 */

const getCardColor = (index) => {
  const colors = ["white", "white", "white"];
  return colors[index % colors.length];
};

const DetalheProduto = ({ id, nome, descricao, detalhes, preco, foto, index, onDelete }) => {
  const cardStyle = {
    ...styles.card,
    backgroundColor: getCardColor(index),
  };

  const navigation = useNavigation();

  const deleteProduto = () => {
    axios
      .delete(`https://6542dfe001b5e279de1fabce.mockapi.io/produto/${id}`)
      .then(() => {
        onDelete(id);
        // Mostra um alerta de sucesso
        Alert.alert("Produto excluído com sucesso");
        // Navega de volta para a tela de produtos
        navigation.navigate('Produtos');
      })
      .catch((error) => {
        console.error("Erro ao excluir produto: ", error);
        // Mostra um alerta de erro
        Alert.alert("Erro ao excluir o produto");
      });
  };

  return (
    <Card style={cardStyle}>
      <View style={styles.fundo}>
        {/* Restante do seu código... */}

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateProdutos',id)}
            activeOpacity={0.8}
            style={styles.botao}
          >
            <Text style={styles.botaoTexto}>✏️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.botao}
            onPress={deleteProduto}
          >
            <Text style={styles.botaoTexto}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export const DetalhesProdutos = ({ route }) => {

  const { item } = route.params;
  console.log(item);

  return (
    <DetalheProduto {...item} />
  );
};

