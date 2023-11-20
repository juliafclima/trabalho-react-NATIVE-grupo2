// import { View, StyleSheet } from "react-native";
// import { styles } from "./style";
// import { Card, Text } from "react-native-paper";
// import React from "react";

// export const DetalhesProdutos = () => {
//   return (
//     <View style={styles.container}>
//       <Card style={styles.cards}>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card titl tryyyyyy6</Text>
//           <Text variant="bodyMedium">Card content tytutyuju</Text>
//
//       </Card>

//       <Card style={styles.cards}>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card title</Text>
//           <Text variant="bodyMedium">Card content</Text>
//
//       </Card>

//       <Card style={styles.cards}>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card title</Text>
//           <Text variant="bodyMedium">Card content</Text>
//
//       </Card>

//       <Card style={styles.cards}>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card title</Text>
//           <Text variant="bodyMedium">Card content</Text>
//
//       </Card>

//       <Card style={styles.cards}>
//         <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//         <Card.Content>
//           <Text variant="titleLarge">Card title</Text>
//           <Text variant="bodyMedium">Card content</Text>
//
//       </Card>
//     </View>
//   );
// };

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
      <Card style={styles.cards}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          COMPRIMIDOS FOCU
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para que vc nao se distraia durante a aula e foque somento no que
          importa, o professor. "Ah mas meu marido, mãe, irmão, cachorro,
          periquito falou comigo" Você não escutará pois seus olhos e ouvidos
          estão com FOCU no que inporta, o professor. "Ah mas tem um elefante no
          meu quintal" Calma jovem, você não poderá fazer nada mesmo pois não é
          adestrador de elefantes, e com a pílula FOCU você seguirá atento sem
          distrações. "Ah mas meu CPU está pegando fogo" Sua cabeça também, mas
          mantenha o FOCU com as pílulas FOCU.
        </Text>
      </Card>

      <Card style={styles.cards}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          PÍLULA ZOOM
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Pra os míopers, astigmatismers, hipermetropiers que precisam que os
          professores , monitores e amiguinhos aumentem a letra para você
          enxergar o que está acontecendo. Se liberte dessa miação com as
          pílulas zoom. As pílulas zoom substituem qualquer consulta absurda de
          cara com o oftalmo. As pílulas zoom substituem óculos e lentes de
          contato.
        </Text>
      </Card>

      <Card style={styles.cards}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          SACHÊ DO SONO
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para você que que revira 342 vezes na cama antes de conseguir dormir,
          Para você que vai deitar pensando "mas e se eu colocasse uma vírgula
          na linha 15" Para você que acorda 5 da manhã já com códigos sambando
          na cabeça, e cansado pois foi dormir ás 4:00, Tome o sachê do sono.
          (Este produto não impede sonhos, pesdelos e afins envolvendo
          programação. Caso persistirem os sintomas, ceda, levante e code. Esta
          pode ser a solução do seu erro.)
        </Text>
      </Card>

      <Card style={styles.cards}>
        <Card.Cover
          style={styles.foto}
          source={{ uri: "https://picsum.photos/700" }}
        />

        <Text style={styles.title} variant="titleLarge">
          TABLETES "XÔ ANSIEDADE"
        </Text>
        <Text style={styles.subtitle} variant="bodyMedium">
          Para evitar visitinhas frequentes na geladeira, beliscos em pacotes de
          biscoitos, lambidas nas panelas que estão pra lavar na pia e qualquer
          tipo de mastigação indevida. Com os tabletes mastiĝáveis " xô
          ansiedade" você mastigará saúde e bem estar. "Ah mas eu comprei um kg
          de amendoim na americanas" Jogue fora. "Ah mas eu tenho cupons do
          ifood" Deixe expirar. "Ah mas lamber as panelas na pia é mais prático
          do que lavar" Dê para os cachorros lamberem.
        </Text>
      </Card>

      <Card style={styles.cards}>
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
          boca. Com as pílulas "trava língua" nenhuma palavra sairá da sua boca
          quando seu nível de estresse estiver alto evitar sinceridade
          excessiva. ( o produto não tem ação "trava dedos" então cuidado com o
          que digita)
        </Text>
      </Card>
    </ScrollView>
  );
};
