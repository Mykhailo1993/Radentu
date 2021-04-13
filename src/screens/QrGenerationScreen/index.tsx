import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import CustomInput from "../../components/CustomInput";
import MediumText from "../../components/MediumText";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from "../../components/Button";

const QrGenerationScreen: React.FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <KeyboardAwareScrollView
    >
      <View style={styles.conatainer}>
        <MediumText style={styles.text}>
          Введіть текс щоб згенерувати QR
        </MediumText>
        <CustomInput onChangeText={(text) => setValue(text)}/>
        <View style={styles.qrContainer}>
          <QRCode
            value={value ? value : 'default'}
            size={300}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    paddingTop: 25, 
  },
  text: {
    fontSize: 20, 
    alignSelf: 'center', 
    marginBottom: 20
  },
  qrContainer: {
    alignItems: 'center', 
    margin: 50
  },
});

export default QrGenerationScreen;