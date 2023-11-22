import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './stack';
import { Tab } from './tab';

export const Rotas = () => {
  return (
    <NavigationContainer>
      {/* <Stack /> */}
      <Tab />
    </NavigationContainer>
  );
};