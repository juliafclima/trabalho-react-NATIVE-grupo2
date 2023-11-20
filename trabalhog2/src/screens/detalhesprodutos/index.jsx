import { View, ScrollView } from "react-native";
import { styles } from "./style";
import { Card, Text } from "react-native-paper";
import React from "react";

export const DetalhesProdutos = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Card style={styles.cards1}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          COMPRIMIDOS FOCU
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para que você nao se distraia durante a aula e foque somento no que
          importa, o professor. <br />
          <br />
          "Ah mas minha mãe, irmão, cachorro, periquito falou comigo"
          <br />
          Você não escutará pois estará com FOCU na aula.
          <br />
          <br />
          "Ah mas meu CPU está pegando fogo" <br />
          Sua cabeça também, mas mantenha o FOCU com as pílulas FOCU.
        </Text>
      </Card>

      <Card style={styles.cards2}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          PÍLULAS ZOOM
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Pra os míopers, astigmatismers, hipermetropiers que precisam que os
          professores, monitores e amiguinhos aumentem a letra para conseguir
          enxergar.
          <br />
          <br />
          Se liberte dessa miação com as pílulas zoom. <br />
          <br />
          As pílulas zoom substituem qualquer consulta absurda de cara com o
          oftalmo. <br />
          <br />
          As pílulas zoom substituem óculos e lentes de contato.
        </Text>
      </Card>

      <Card style={styles.cards3}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          SACHÊ DO SONO
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para você que que revira 342 vezes na cama antes de conseguir dormir.
          <br />
          <br />
          Para você que vai deitar pensando "mas e se eu colocasse uma vírgula
          na linha 15?!" <br />
          <br />
          (Este produto não impede sonhos, pesdelos e afins envolvendo
          programação. Caso persistirem os sintomas, ceda, levante e code. Esta
          pode ser a solução do seu erro.)
        </Text>
      </Card>

      <Card style={styles.cards1}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          TABLETES "XÔ ANSIEDADE"
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para evitar visitinhas frequentes na geladeira, beliscos em pacotes de
          biscoitos e qualquer tipo de mastigação indevida.
          <br />
          <br />
          Com os tabletes mastiĝáveis "xô ansiedade" você mastigará saúde e bem
          estar. <br />
          <br />
          "Ah mas eu comprei 1 kg de amendoim na americanas" <br />
          Jogue fora. <br />
          <br />
          "Ah mas eu tenho cupons do ifood" <br />
          Deixe expirar.
        </Text>
      </Card>

      <Card style={styles.cards2}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          COMPRIMIDOS "TRAVA-LÍNGUA"
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Os comprimidos revestidos "trava língua" funcionam bloqueando sua
          língua nos momentos de estresse para que a sinceridade não saia pela
          boca. <br />
          <br />
          Com as pílulas "trava língua" nenhuma palavra sairá da sua boca quando
          seu nível de estresse estiver alto evitando sinceridade excessiva.
          <br /> <br />
          (O produto não tem ação "trava dedos" então cuidado com o que digita)
        </Text>
      </Card>
    </ScrollView>
  );
};
