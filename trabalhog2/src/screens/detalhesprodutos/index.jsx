import { ScrollView } from "react-native";
import { styles } from "./style";
import { Card, Text } from "react-native-paper";
import React from "react";

const produtos = [
  {
    nome: "COMPRIMIDOS FOCU",
    descricao:
      "Para que você não se distraia durante a aula e foque somente no que importa, o professor.",
    detalhes:
      'Você não escutará pois estará com FOCU na aula. "Ah mas meu CPU está pegando fogo" Sua cabeça também, mas mantenha o FOCU com as pílulas FOCU.',
  },
  {
    nome: "PÍLULAS ZOOM",
    descricao:
      "Para míopes, astigmatismos, hipermetropes que precisam aumentar a letra para enxergar.",
    detalhes:
      "Se liberte dessa miopia com as pílulas zoom. As pílulas zoom substituem qualquer consulta absurda de cara com o oftalmo. As pílulas zoom substituem óculos e lentes de contato.",
  },
  {
    nome: "SACHÊ DO SONO",
    descricao:
      "Para quem revira 342 vezes na cama antes de conseguir dormir.",
      
    detalhes:
      'Para você que vai deitar pensando "mas e se eu colocasse uma vírgula na linha 15?!" (Este produto não impede sonhos, pesadelos e afins envolvendo programação. Caso persistirem os sintomas, ceda, levante e code. Esta pode ser a solução do seu erro.)',
  },
  {
    nome: 'TABLETES "XÔ ANSIEDADE"',
    descricao:
      "Para evitar visitinhas frequentes na geladeira, beliscos em pacotes de biscoitos e qualquer tipo de mastigação indevida.",
    detalhes:
      'Com os tabletes mastigáveis "xô ansiedade" você mastigará saúde e bem-estar. "Ah mas eu comprei 1 kg de amendoim na americanas" Jogue fora. "Ah mas eu tenho cupons do ifood" Deixe expirar.',
  },
  {
    nome: 'COMPRIMIDOS "TRAVA-LÍNGUA"',
    descricao:
      "Os comprimidos revestidos 'trava língua' funcionam bloqueando sua língua nos momentos de estresse para que a sinceridade não saia pela boca.",
    detalhes:
      'Com as pílulas "trava língua" nenhuma palavra sairá da sua boca quando seu nível de estresse estiver alto, evitando sinceridade excessiva. (O produto não tem ação "trava dedos", então cuidado com o que digita)',
  },
];

const getCardColor = (index) => {
  const colors = ["#f17064", "#ffb25f", "#55b3d1"];
  return colors[index % colors.length];
};

const DetalheProduto = ({ nome, descricao, detalhes, index }) => {
  const cardStyle = {
    ...styles.card,
    backgroundColor: getCardColor(index),
  };

  return (
    <Card style={cardStyle}>
      <Card.Cover style={styles.foto} source={{ uri: "https://picsum.photos/700" }} />
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.subtitle}>{descricao}</Text>
      <Text style={styles.subtitle2}>{detalhes}</Text>
    </Card>
  );
};

export const DetalhesProdutos = () => (
  <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    {produtos.map((produto, index) => (
      <DetalheProduto key={index} index={index} {...produto} />
    ))}
  </ScrollView>
);

