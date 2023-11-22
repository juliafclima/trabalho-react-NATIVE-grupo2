import { NavigationContainer } from '@react-navigation/native';
import { Tab } from './tab';
import { Drawer } from './drawer';

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Tab />
      {/* <Drawer /> */}
    </NavigationContainer>
  );
};