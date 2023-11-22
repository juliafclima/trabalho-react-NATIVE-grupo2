import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Tab } from './tab';

const { Navigator, Screen } = createDrawerNavigator();

export const Drawer = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Tab'
          component={Tab}
        />
      </Navigator>
    </NavigationContainer>
  );
};
