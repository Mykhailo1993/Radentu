import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { MainParamList } from "../../../navigation/MainStackNavigation";
import { SET_TOKEN } from "../../reducers/userReducer";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-toast-message';
import MediumText from "../../components/MediumText";
import styles from "./style";


const validLogin = 'User';
const validPassword = '123456';

type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginScreen: React.FC<StackScreenProps<MainParamList, 'Drawer'> & PropsFromRedux> = ({ navigation, saveToken }) => {

  const [ userLogin, setUserLogin ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');


  const login = () => {
    if(userLogin === validLogin && password === validPassword){
      saveToken("userToken");
      navigation.reset({
        index: 0,
        routes: [{ name: 'Drawer' }],
      })   
    }else{
      Toast.show({
        type: 'error', 
      })
    };
  };

  const toastConfig = {
    error: ({ ...props }) => {
     return(
      <View style={styles.toastContainer}>
        <MediumText style={styles.toasMessage}>Провірте правильність введених даних: {validLogin}</MediumText>
      </View>
     ) 
    }
  };

  return (
    <>
    <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.logo}>Radentu</Text>
        <CustomInput 
          onChangeText={(login) => setUserLogin(login)}
          placeholder="Логін"
          />
        <CustomInput 
          onChangeText={(password) => setPassword(password)}
          type="password"
          placeholder="Пароль"
          />
        <Button label="Авторизуватися" onPress={login} containerStyle={{marginHorizontal: 50}}/>
      </View>
    </KeyboardAwareScrollView>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  saveToken: (token: string) => dispatch({ token, type: SET_TOKEN }),
});

const connector = connect(null, mapDispatchToProps);

export default connector(LoginScreen);