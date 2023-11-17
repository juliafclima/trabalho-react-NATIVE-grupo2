import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Login } from '../screens/login';
import { Produtos } from '../screens/produtos';
import { Integrantes } from '../screens/integrantes';

const { Navigator, Screen } = createNativeStackNavigator();

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }} />
        <Screen
          name='Home'
          component={Home}
          options={{ title: 'Página Principal' }} />
        <Screen
          name='Produtos'
          component={Produtos}
          options={{ title: 'Produtos' }} />
        <Screen
          name='Integrantes'
          component={Integrantes}
          options={{ title: 'Integrantes' }} />
      </Navigator>
    </NavigationContainer>
  );
};