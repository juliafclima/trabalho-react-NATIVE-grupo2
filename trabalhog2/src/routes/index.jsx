import { NavigationContainer } from '@react-navigation/native';
import { Tab } from './tab';
import { Drawer } from './drawer';

export const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator>
        
        
      
        <Screen
          name='Home'
          component={Home}
          options={{ title: 'Página Principal', headerShown: false }} />
        <Screen
          name='Produtos'
          component={Produtos}
          options={{ title: 'Produtos' }} />
          <Screen
          name='DetalhesProdutos'
          component={DetalhesProdutos}
          options={{ title: 'Detalhes dos produtos' }} />
        <Screen
          name='CadastrarProdutos'
          component={CadastrarProdutos}
          options={{ title: 'Cadastro de produtos' }} />
        
        <Screen
          name='UpdateProdutos'
          component={UpdateProdutos}
          options={{ title: 'Editar produto' }} />
        <Screen
          name='Integrantes'
          component={Integrantes}
          options={{ title: 'Integrantes' }} />

<Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }} />
            <Screen
          name='Cadastro'
          component={Cadastro}
          options={{ headerShown: false }} />

      </Navigator>
    </NavigationContainer>
  );
};