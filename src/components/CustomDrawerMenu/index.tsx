import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from "../../reducers";
import { Dispatch } from "redux"
import { SET_TOKEN } from '../../reducers/userReducer';
import Button from '../Button';
import styles from './style';
import MediumText from '../MediumText';
import Avatar from '../Avatar';

type PropsFromRedux = ConnectedProps<typeof connector>;

const CustomDrawerMenu: React.FC<DrawerContentComponentProps & PropsFromRedux> = ({ navigation, setToken }) => {

  const logout = () => {
    setToken('');
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    })
  };

  const navigateTo = (route: string) => {
    navigation.navigate(`${route}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar uri='https://media-exp1.licdn.com/dms/image/C4E03AQERvKq_Un3ryw/profile-displayphoto-shrink_400_400/0/1600089451729?e=1623283200&v=beta&t=xUzYVsjCLpfYQs5j1dMUIk5oxZ5gOjmBUFSGDegpfH0'/>
        <MediumText style={{fontSize: 20, marginLeft: 10}}>Mikhaylo</MediumText>
      </View>
      <View style={styles.mainContainer}>
        <Button 
          label="Профіль" 
          onPress={() => navigateTo('Profile')} 
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
        />
        <Button 
          label="Список новин" 
          onPress={() => navigateTo('News')}
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
        />
        <Button 
          label="Генетор кода" 
          onPress={() => navigateTo('QR')}
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
        />
        <Button 
          label="Зробити фото" 
          onPress={() => navigateTo('PhotoScreen')}
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
        />
      </View>
      <Button 
        label="Вийти" 
        onPress={logout} 
        containerStyle={styles.containerStyle} 
        textStyle={styles.textStyle}
      />
    </View>
  )
};

const mapStateToProps = (state: AppState) => ({
  token: state.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setToken: (token: string) => dispatch({token, type: SET_TOKEN})
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CustomDrawerMenu);

