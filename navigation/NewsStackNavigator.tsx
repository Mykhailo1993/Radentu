import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../src/reducers';
import NewsScreen from '../src/screens/NewsScreen';
import NewsDetailsScreen from '../src/screens/NewsDetailsScreen';

export type NewsParamList = {
  News: undefined;
  NewsDetails: undefined;
};

const Stack = createStackNavigator<NewsParamList>();

type PropsFromRedux = ConnectedProps<typeof connector>;

const NewsStackNavigator:React.FC<PropsFromRedux> =  () => {
  
  return (
      <Stack.Navigator >
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
      </Stack.Navigator>
  );
};

const mapStateToProps = (state: AppState) => ({
  token: state.user.token
});

const connector = connect(mapStateToProps);

export default connector(NewsStackNavigator);