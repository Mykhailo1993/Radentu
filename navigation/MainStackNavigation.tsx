import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerStackNavigator from './DrawerStackNavigator';
import LoginScreen from '../src/screens/LoginScreen';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../src/reducers';

export type MainParamList = {
  LoginScreen: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<MainParamList>();

type PropsFromRedux = ConnectedProps<typeof connector>;

const MainStackNavigator:React.FC<PropsFromRedux> =  ({ token }) => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={token ? 'Drawer' : 'LoginScreen'} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen 
          name="Drawer" 
          component={DrawerStackNavigator} 
          options={{ 
            title: 'Profile',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state: AppState) => ({
  token: state.user.token
});

const connector = connect(mapStateToProps);

export default connector(MainStackNavigator);