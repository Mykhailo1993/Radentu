import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from "../src/screens/ProfileScreen"
import NewsScreen from '../src/screens/NewsScreen';
import CustomDrawerMenu from '../src/components/CustomDrawerMenu/index'
import QrGenerationScreen from '../src/screens/QrGenerationScreen';
import SendPhotoScreen from '../src/screens/SendPhotoScreen';
import NewsStackNavigator, { NewsParamList } from './NewsStackNavigator';

export type DrawerParamList = {
  Profile: undefined;
  News: NewsParamList;
  QR: undefined;
  PhotoScreen: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const  DrawerStackNavigator = ()  => {
  return (
      <Drawer.Navigator drawerStyle={{
        width: '70%',
      }}
      drawerContent={(props) => <CustomDrawerMenu {...props} />}>
         <Drawer.Screen name="Profile" component={ProfileScreen} />
         <Drawer.Screen name="News" component={NewsStackNavigator} />
         <Drawer.Screen name="QR" component={QrGenerationScreen} />
         <Drawer.Screen name="PhotoScreen" component={SendPhotoScreen} />
      </Drawer.Navigator>
  );
}

export default DrawerStackNavigator;