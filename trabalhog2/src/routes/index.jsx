import { NavigationContainer } from '@react-navigation/native';
import { Tab } from './tab';
import { TabLogin } from './tabLogin';

export const Rotas = () => {
  return (
    <NavigationContainer>
      {/* <TabLogin /> */}
      <Tab />
    </NavigationContainer>
  );
};