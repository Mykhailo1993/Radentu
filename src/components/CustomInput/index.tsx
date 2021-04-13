import React, { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./style";

type ICustomInput = {
  onChangeText: (value: string) => void;
  type?: 'password';
} & TextInputProps;

const CustomInput: React.FC<ICustomInput> = ({ onChangeText, type, ...rest }) => {
  const [value, setValue] = useState<string>('');
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      onChangeText={(text: string) => {
        setValue(text);
        onChangeText(text)
      }}
      value={value}
      secureTextEntry={visiblePassword}
      {...rest}
    />
    {
      type === 'password' && (
        <Feather 
          name={visiblePassword ?  "eye" : "eye-off" } 
          size={20} color="black"  
          style={{position:'absolute', right: 40}} 
          onPress={() => setVisiblePassword(!visiblePassword)}
        />
      ) 
    }
    </View>
  ); 
};

export default CustomInput;
