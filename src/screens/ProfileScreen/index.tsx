import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert} from "react-native";
import { AppState } from "../../reducers";
import { Dispatch } from "redux"
import { SET_TOKEN } from "../../reducers/userReducer";
import { connect, ConnectedProps } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { MainParamList } from "../../../navigation/MainStackNavigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MediumText from "../../components/MediumText";
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";


type PropsFromRedux = ConnectedProps<typeof connector>;


const ProfileScreen: React.FC<StackScreenProps<MainParamList> & PropsFromRedux> = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    lastName: ''
  });

  const saveData = () => {
    Alert.alert("Дані успішно збережено");
    setUser({
      name: '',
      lastName: ''
    })
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <MediumText style={styles.headerText}>Заповніть ірнформацію про себе</MediumText>
        <TouchableOpacity style={styles.photoContainer}>
          <MaterialIcons name="add-a-photo" size={50} />
          <MediumText style={styles.photoText}>Завантажити фото</MediumText>
        </TouchableOpacity>
        <CustomInput onChangeText={(text) => {
          setUser((prev) => {
            return {
              ...prev,
              name: text
            }
          })
        }} placeholder="Ввведіть ім'я..."/>
        <CustomInput onChangeText={(text) => {
          setUser((prev) => {
            return {
              ...prev,
              lastName: text
            }
          })
        }} placeholder="Ввведіть прізвище..."/>
        <Button label="Зберегти" 
          containerStyle={(user.name && user.lastName) ? styles.button : styles.disabled}
          onPress={saveData}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: '100%', 
    paddingTop: 20
  },
  headerText: { 
    fontSize: 20, 
    alignSelf: 'center' 
  }, 
  photoContainer: {
    flexDirection: 'row', 
    alignItems:'center', 
    margin: 20
  },
  photoText: {
    marginLeft: 20, 
    fontSize: 20
  },
  button: {
    marginHorizontal: 50,
  },
  disabled: {
    marginHorizontal: 50,
    backgroundColor: '#f08989'
  }
})

const mapStateToProps = (state: AppState) => ({
  token: state.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setToken: (token: string) => dispatch({token, type: SET_TOKEN})
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ProfileScreen);