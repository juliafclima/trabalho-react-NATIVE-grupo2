import { View,StyleSheet } from 'react-native';
import { styles} from "./style";
import { Card, Text } from 'react-native-paper';
import React from "react";

export const DetalhesProdutos = () => {
  return (




    <View style={styles.container}>

<Card style={styles.cards}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text variant="titleLarge">Card titl tryyyyyy6</Text>
      <Text variant="bodyMedium">Card content  tytutyuju</Text>
    </Card.Content>
  </Card>

  <Card style={styles.cards}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
 
  <Card style={styles.cards} >
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>

  <Card style={styles.cards} >
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>

  <Card style={styles.cards} >
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>
 
 


    </View>
  );
};

