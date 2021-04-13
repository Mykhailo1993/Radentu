import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import AppLoading from 'expo-app-loading';
import getStore from './src/store';
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_300Light,
} from '@expo-google-fonts/ubuntu';

const {persistor, store} = getStore();

const App = () => {
  const [fontLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_300Light,
  })

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <MainStackNavigator />
        </View>
      </PersistGate>
    </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
